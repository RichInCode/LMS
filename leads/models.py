from django.db import models


# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True)
    message = models.CharField(max_length=300, null=True, blank=True)
    phone = models.CharField(max_length=300, null=True)
    title = models.CharField(max_length=300, null=True)
    city = models.CharField(max_length=300, null=True)
    state = models.CharField(max_length=300, null=True)
    country = models.CharField(max_length=300, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
