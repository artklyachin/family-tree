from django.db import models
from django.contrib.auth.models import AbstractUser

def upload_to(instance, filename):
    return 'images/users/{filename}'.format(filename=filename)

class User(AbstractUser):
    avatar = models.ImageField(upload_to=upload_to, default='images/card/avatar.png')
