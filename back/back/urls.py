"""
URL configuration for back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from card.views import CardViewSet, CardListViewSet, CardOwnerViewSet, CardEditorsViewSet, CardSubscribersViewSet, CardViewersViewSet
from comment.views import CommentViewSet
from user.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'cards', CardViewSet)
router.register(r'cards_list', CardListViewSet)
router.register(r'cards_owner', CardOwnerViewSet)
router.register(r'cards_edit', CardEditorsViewSet)
router.register(r'cards_sub', CardSubscribersViewSet)
router.register(r'cards_view', CardViewersViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), 
]

