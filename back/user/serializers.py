from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'avatar', 'first_name', 'last_name']

class UserSerializerReg(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name']    
        extra_kwargs = {'password' : {'write_only' : True}} #чтобы поле password не было видно в /api
