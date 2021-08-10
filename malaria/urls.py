from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='dashboard'),
    path('test/', views.malaria_predict, name='test'),
    path('result/', views.result, name='result'),
]
