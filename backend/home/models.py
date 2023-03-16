from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True,)
    chef = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="recipe_chef",)
