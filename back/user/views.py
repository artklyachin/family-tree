from django.shortcuts import render
from rest_framework import viewsets, mixins, views, response
from .serializers import UserSerializer, UserSerializerReg
from .models import User
from rest_framework.parsers import MultiPartParser, FormParser

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  parser_classes = (MultiPartParser, FormParser)

class UserViewReg(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializerReg
  parser_classes = (MultiPartParser, FormParser)

  # добавление пароля и перевод в зашифрованный вид
  def perform_create(self, serializer):
    user = User.objects.create_user(**serializer.validated_data)
    user.set_password(serializer.validated_data['password'])
    return user

class UserCurrent(views.APIView):
  def get(self, request):
    serializer = UserSerializer(request.user)
    return response.Response(serializer.data)

