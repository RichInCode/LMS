from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('lead/view/', views.data_provider),
    path('lead/entry/', views.user_form)
]
