from rest_framework import serializers
from .models import User

class UserSerializerCardSet(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'avatar', 'card_set']

class UserSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'avatar']

class UserSerializerReg(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password']    
        # extra_kwargs = {'password' : {'write_only' : True}}
