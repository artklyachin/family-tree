from django.db import models
from django.contrib.auth.models import User
from card.models import Card

class Comment(models.Model):
    comment = models.CharField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.comment


