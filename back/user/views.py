from django.shortcuts import render
from rest_framework import viewsets, mixins
from .serializers import UserSerializer, UserSerializerCardSet, UserSerializerReg
from .models import User
from rest_framework.parsers import MultiPartParser, FormParser

class UserViewSetCardSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializerCardSet
  parser_classes = (MultiPartParser, FormParser)

class UserViewSet(viewsets.ModelViewSet):
# class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  parser_classes = (MultiPartParser, FormParser)

class UserViewReg(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializerReg
  parser_classes = (MultiPartParser, FormParser)

  def perform_create(self, serializer):
    user = User.objects.create_user(**serializer.validated_data)
    user.set_password(serializer.validated_data['password'])

    return user

