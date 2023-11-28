from django.shortcuts import render
from rest_framework import viewsets, generics, mixins, permissions
from .serializers import CardSerializer, CardListSerializer, CardPermissionSerializer, CardWithCommentsSerializer
from .models import Card

# Create your views here.
 
class CardViewSet( viewsets.ModelViewSet ):
  serializer_class = CardSerializer
  queryset = Card.objects.all()

class CardWithCommentsViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin ):
  serializer_class = CardWithCommentsSerializer
  queryset = Card.objects.all()

class CardListViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardListSerializer
  queryset = Card.objects.all()

class CardPermissionViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardPermissionSerializer
  queryset = Card.objects.all()

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return Card.objects.filter(editors=self.request.query_params['user'])
    return super().get_queryset()
  
class CardOwnerViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardPermissionSerializer
  queryset = Card.objects.all()

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return Card.objects.filter(owner=self.request.query_params['user'])
    return super().get_queryset()
  
class CardEditorsViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardPermissionSerializer
  queryset = Card.objects.all()

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return Card.objects.filter(editors=self.request.query_params['user'])
    return super().get_queryset()
  
class CardSubscribersViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardPermissionSerializer
  queryset = Card.objects.all()

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return Card.objects.filter(subscribers=self.request.query_params['user'])
    return super().get_queryset()
  
class CardViewersViewSet(viewsets.GenericViewSet, mixins.ListModelMixin ):
  serializer_class = CardPermissionSerializer
  queryset = Card.objects.all()

  def get_queryset(self):
    if 'user' in self.request.query_params:
      return Card.objects.filter(viewers=self.request.query_params['user'])
    return super().get_queryset()
 
  #  def get_queryset(self):
  #   if 'card' in self.request.query_params:
  #     return Card.objects.filter(owner=self.request.query_params['card'])
  #   return super().get_queryset()