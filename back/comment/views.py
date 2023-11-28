from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CommentSerializer
from .models import Comment

# Create your views here.

class CommentViewSet(viewsets.ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comment.objects.all()

  def perform_create(self, serializer):
    serializer.user = self.request.user
    return super().perform_create(serializer)

  # def get_queryset(self):
  #   if 'card' in self.request.query_params:
  #     return Comment.objects.filter(card_id=self.request.query_params['card'])
  #   return super().get_queryset()
