from rest_framework import serializers
from .models import Card
#from user.serializers import UserSerializer
from comment.serializers import CommentSerializer

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = '__all__'

class CardWithCommentsSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = Card
        fields = ['name', 'surname', 'family', 'image', 'owner', 'editors', 'subscribers', 'viewers', 'comment_set']
