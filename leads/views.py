from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics

from django.shortcuts import render_to_response, render
from django.db.models import Count
from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from django.views.generic.base import TemplateView
from django.http import HttpResponse

from bokeh.models import LogColorMapper
from bokeh.palettes import Viridis6 as palette
from bokeh.plotting import figure
from bokeh.sampledata.us_states import data as states
from bokeh.embed import components

from leads.services.chatbot.messageInterpeter import message_interpreter


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class DBSearchListView(generics.ListCreateAPIView):

    def get_queryset(self):
        qs = Lead.objects.all()

        keywords = self.request.GET.get('q')
        if keywords:
            query = SearchQuery(keywords)
            vector = SearchVector('title', 'name')
            qs = qs.annotate(search=vector).filter(search=query)

        return qs

    serializer_class = LeadSerializer


class UpdateRow(generics.UpdateAPIView):

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class ChatBot(TemplateView):

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    def get(self, request):
        message = request.GET.get('q')
        text_response = message_interpreter(message)
        return HttpResponse(text_response)


def dashboard(request):
    state_xs = [state["lons"] for state in states.values()]
    state_ys = [state["lats"] for state in states.values()]

    state_names = [state for state in states.keys()]
    color_mapper = LogColorMapper(palette=palette)

    rate_dict = {}
    for name in state_names:
        rate_dict[name] = 0

    rate_values = Lead.objects.values('state').annotate(dcount=Count('state'))
    for i in rate_values:
        if i['state'] != None:
            rate_dict[i['state']] = i['dcount']

    print(rate_dict)

    #rate = [float(random.randrange(1, 10)) for _ in range(0, 51)]
    rate = list(rate_dict.values())

    data=dict(
        x=state_xs,
        y=state_ys,
        name=state_names,
        rate=rate,
    )
    TOOLS = "pan,wheel_zoom,reset,hover,save"

    p = figure(
        title="Number of Leads in Each State", tools=TOOLS,
        x_axis_location=None, y_axis_location=None,
        tooltips=[
            ("Name", "@name"), ("Count", "@rate"), ("(Long, Lat)", "($x, $y)")
        ],
        x_range=(-130, -60),
        y_range=(20, 60))
    p.grid.grid_line_color = None
    p.hover.point_policy = "follow_mouse"
    p.legend.location='top_right'

    p.patches('x', 'y', source=data,
              fill_color={'field': 'rate', 'transform': color_mapper},
              fill_alpha=0.7,
              line_color="white", line_width=0.5
             )

    #show(p)

    script, div = components(p)
    return render(request, 'bokeh/dashboard.html',
                  {'the_script': script, 'the_div': div})