from django.db import models

from django.shortcuts import reverse


class Product(models.Model):
    Type_Choices =[
        ('1', 'Manzel'),
        ('2', 'Aparteman'),
        ('3', 'Zamin&Kolangi'),
        ('4', 'Baf&arazi'),
        ('5', 'Tejari'),
        ('6', 'Saanati'),
        ('7', 'Edari'),
        ('8', 'Tehatar'),
        ('9', 'EjareRuzane'),
        ('10', 'PishForosh'),
    ]

    title = models.CharField(max_length=100)
    code = models.PositiveIntegerField(default=1)
    description = models.TextField()
    short_description = models.TextField(blank=True)
    active = models.BooleanField(default=True)
    type = models.CharField(max_length=50, choices=Type_Choices)

    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('product_detail', args=[self.pk])