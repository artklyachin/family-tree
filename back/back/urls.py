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
from card.views import CardViewSet, CardOwnerViewSet, CardEditorsViewSet, CardSubscribersViewSet, CardViewersViewSet, CardWithCommentsViewSet
from comment.views import CommentViewSet
from user.views import UserViewSet, UserViewReg, UserCurrent

router = routers.DefaultRouter()
router.register(r'cards', CardViewSet) #все card со всеми полями 
router.register(r'cards_with_comments', CardWithCommentsViewSet) #cards_list со списками комментариев 
# фильтрация по спискам
router.register(r'cards_owner', CardOwnerViewSet)
router.register(r'cards_edit', CardEditorsViewSet)
router.register(r'cards_sub', CardSubscribersViewSet)
router.register(r'cards_view', CardViewersViewSet)

router.register(r'comments', CommentViewSet) #список всех комментариев
router.register(r'users', UserViewSet) #список всех юзеров
router.register(r'users_reg', UserViewReg) #для добавления эзеров

from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), 
    path('api/current_user/', UserCurrent.as_view(), name='users_current'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

