from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CommentSerializer
from .models import Comment
from rest_framework import viewsets, generics, mixins, permissions

# Create your views here.

class CommentViewSet(viewsets.ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comment.objects.all()
  permission_classes = [permissions.IsAuthenticated]

  def perform_create(self, serializer):
    serializer.user = self.request.user
    return super().perform_create(serializer)
