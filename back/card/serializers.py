from rest_framework import serializers
from .models import Card
#from user.serializers import UserSerializer

class CardSerializer(serializers.ModelSerializer):
#    user = UserSerializer()

    class Meta:
        model = Card
        fields = '__all()__'

#        fields = ['name', 'surname', 'family', 'image', 'owner', 'editors', 'viewers']
