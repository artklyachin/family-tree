from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, UserSerializerCardSet
from .models import User
from rest_framework.parsers import MultiPartParser, FormParser

class UserViewSetCardSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializerCardSet
  parser_classes = (MultiPartParser, FormParser)

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  parser_classes = (MultiPartParser, FormParser)