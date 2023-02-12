from django.urls import path, include
from .views import (
    UserApiView,
    UserDetailApiView
)

urlpatterns = [
    path('api', UserApiView.as_view()),
    path('api/<str:user_id>/', UserDetailApiView.as_view())
]