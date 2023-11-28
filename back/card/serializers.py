from rest_framework import serializers
from .models import Card
#from user.serializers import UserSerializer
from comment.serializers import CommentSerializer

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ['name', 'surname', 'family', 'owner', 'editors', 'subscribers', 'viewers']

class CardWithCommentsSerializer(serializers.ModelSerializer):
    #user = UserSerializer()
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = Card
        fields = ['name', 'surname', 'family', 'image', 'owner', 'editors', 'subscribers', 'viewers', 'comment_set']

class CardListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        #fields = ['name', 'surname', 'family', 'image', 'owner']
        fields = '__all__'

class CardPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['name', 'surname', 'family', 'image', 'owner', 'editors', 'subscribers', 'viewers']


#        fields = '__all__'
#        fields = ['name', 'surname', 'family', 'image', 'owner', 'editors', 'viewers']
