from django.urls import path
from . import views


urlpatterns = [
   path('api/lead/', views.LeadListCreate.as_view() ),
   path('bokeh/dashboard', views.dashboard, name='dashboard')
]
