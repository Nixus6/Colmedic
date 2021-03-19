from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import User

# Create your models here.

class User(AbstractUser):
    type_user = models.SmallIntegerField(null=True) 