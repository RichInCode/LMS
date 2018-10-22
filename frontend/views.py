from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
#@login_required()
def index(request):
    return render(request, 'frontend/welcome.html')


def data_provider(request):
    return render(request, 'frontend/data_provider.html')


def user_form(request):
    return render(request, 'frontend/user_form.html')


def chatbot(request):
    return render(request, 'frontend/chatbot.html')


def edit_table(request):
    return render(request, 'frontend/manage.html')
