from django.urls import path 
from wonderland import views

# define the urls
urlpatterns = [
    path('contacts/', views.contacts),
    path('contacts/<int:pk>/', views.contact_detail),
]