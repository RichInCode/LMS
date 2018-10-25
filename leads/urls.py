from django.urls import path, re_path
from . import views


urlpatterns = [
   path('api/lead/', views.LeadListCreate.as_view()),
   path('api/lead/<int:pk>', views.UpdateRow.as_view()),
   path('bokeh/dashboard', views.dashboard, name='dashboard'),
   path('api/search/', views.DBSearchListView.as_view()),
   path('api/search/?<slug:q>', views.DBSearchListView.as_view()),
   path('api/chatbot/', views.ChatBot.as_view()),
   path('api/chatbot/?<slug:q>', views.ChatBot.as_view())
]
