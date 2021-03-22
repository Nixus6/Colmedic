from django.db import models

# Investigar mas Sobre Abstract user
# from django.conf import settings
from user.models import NewUser

# Create your models here.

class City(models.Model):
    # id_city = models.Autofield(primari_key = True, unique = True, null = False)
    namecity = models.CharField(max_length = 250)

class Medical_Center(models.Model):
    # id_MC = models.Autofield(primari_key = True, unique = True, null = False)
    nameMC = models.CharField(max_length = 250)

class Specialty(models.Model):
    # id_MC = models.Autofield(primari_key = True, unique = True, null = False)
    namespecialty = models.CharField(max_length = 250)

class Modality(models.Model):
    # id_MC = models.Autofield(primari_key = True, unique = True, null = False)
    namemodality = models.CharField(max_length = 250)

class Quotes(models.Model):
    # id_Quotes = models.AutoField(primary_key = True, unique = True, null = False)
    date = models.DateField()
    time = models.CharField(max_length = 2)
    hour = models.DateField()
    created_at = models.DateTimeField("Created_At",auto_now_add=True)
    # Investigar mas Sobre Abstract user
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    medical_center = models.ForeignKey(Medical_Center,on_delete=models.CASCADE)
    specialty = models.ForeignKey(Specialty,on_delete=models.CASCADE)
    modality = models.ForeignKey(Modality,on_delete=models.CASCADE)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE,related_name='+', null=True, blank=True)
    doctor = models.ForeignKey(NewUser, on_delete=models.CASCADE,related_name='+', null=True, blank=True)