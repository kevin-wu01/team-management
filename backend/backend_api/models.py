from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
import uuid

# Create your models here.

class User(models.Model):
    USER = 'U'
    ADMIN = 'A'
    ROLE_CHOICES = (
        (USER, 'User'),
        (ADMIN, 'Admin'),
    )

    phone_regex = RegexValidator(
        regex='\d{3}?-\d{3}-\d{4}$',
        message='Phone number must be entered in the format: XXX-XXX-XXXX'
    )

    firstName = models.CharField(max_length=180)
    lastName = models.CharField(max_length=180)
    email = models.EmailField(max_length=250)
    phone = models.CharField(validators=[phone_regex], max_length=12)
    role = models.CharField(
        max_length=1,
        choices=ROLE_CHOICES,
        default=USER,
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def ___str___(self):
        return self.email