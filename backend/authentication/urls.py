from django.urls import path

from .views import  MyTokenObtainPairView, register_user

urlpatterns = [
    path("register/", register_user, name="register_user"),
    path("login/", MyTokenObtainPairView.as_view(), name="login"),
]
