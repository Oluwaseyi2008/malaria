from django.db import models

# Create your models here.


class Malaria(models.Model):
    HBP = models.BooleanField()
    Fever = models.BooleanField()
    nauseous = models.BooleanField()
    aches = models.BooleanField()
    Sweat = models.BooleanField()
    Diarrhea = models.BooleanField()
    fatigue = models.BooleanField()
    AbdominalPain = models.BooleanField()
    Headache = models.BooleanField()
    HeartPain = models.BooleanField()
    malaria_result = models.BooleanField()
