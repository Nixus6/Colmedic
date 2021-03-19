from django.db import models

# Create your models here.

#Representa una tabla en mi base de datos
# class Quotes(models.Model):
#     id_Quotes = models.AutoField(primary_key = True, unique = True)
#     date = models.CharField(max_length = 2)
#     time = models.CharField(max_length = 2)
#     hour = models.CharField(max_length = 2)
#     created_at = models.DateTimeField(auto_now_add=True)
    #foreign modality = 
    #foreign medical_Center = models.CharField(max_length = 100)
    #foreign City =
    #foreign User
    #foreign Doctor specialty

# class User(models.Model):
#     id = models.AutoField(primary_key = True, unique=True )
#     name = models.CharField(max_length = 100)
#     lastname = models.CharField(max_length = 120)
#     email = models.EmailField(max_length = 200)
#python manage.py makemigrations
#python manage.py migration