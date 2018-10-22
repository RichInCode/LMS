from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('lead/view/', views.data_provider),
    path('lead/entry/', views.user_form),
    path('lead/chatbot/', views.chatbot),
    path('lead/manage/', views.edit_table)
]
