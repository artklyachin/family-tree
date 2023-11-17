from django.db import models

class Publication(models.Model):
    title = models.CharField(max_length=100)
    geo = models.CharField(max_length=100)
    image = models.ImageField(blank=True, upload_to='images/publication')