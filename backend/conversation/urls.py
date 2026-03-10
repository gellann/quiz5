from django.urls import path

from .views import conversation, conversation_list_view, conversation_detail_view

urlpatterns = [
    path("", conversation, name="conversation"),
    path("conversations/", conversation_list_view, name="conversation-list"),
    path('conversations/<str:pk>/', conversation_detail_view, name="conversation-detail"),

]
