from django.db import models
from django.contrib.auth.models import User

class Card(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    family = models.CharField(max_length=100)
    image = models.ImageField(blank=True, upload_to='images/card')

    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    editors = models.ManyToManyField(User, related_name="editor_members")
    viewers = models.ManyToManyField(User, related_name="viewer_members")

    def __str__(self) -> str:
        return self.name + ' ' + self.surname