from django.db import models
from user.models import User

def upload_to(instance, filename):
    return 'images/card/{filename}'.format(filename=filename)

class Card(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    family = models.CharField(blank=True, max_length=100)
    # image = models.ImageField(upload_to='images/card', default='images/card/avatar.png')
    image = models.ImageField(upload_to=upload_to, default='images/card/avatar.png')

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    editors = models.ManyToManyField(User, related_name="editor_members", blank=True)
    subscribers = models.ManyToManyField(User, related_name="subscriber_members", blank=True)
    viewers = models.ManyToManyField(User, related_name="viewer_members", blank=True)

    def __str__(self) -> str:
        return self.name + ' ' + self.surname

class UserCard(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    card = models.OneToOneField(Card, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return 'user:' + str(self.user) + ' card:' + str(self.card)