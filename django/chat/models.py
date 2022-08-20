from django.db import models

class Message(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)