from django.shortcuts import render
from .models import Publication

def index(request ):
    return render(request, 'index.html', {'publication' : Publication.objects.all() } )