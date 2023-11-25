from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + ((None, {'fields': ('avatar',)}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {'fields': ('avatar',)}),)

admin.site.register(User, CustomUserAdmin)

