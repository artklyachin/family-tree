from django.db import models
from user.models import User
from card.models import Card

class Userinfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    own_card_link = models.OneToOneField(Card, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, upload_to='images/userinfo')

    def __str__(self) -> str:
        return self.name