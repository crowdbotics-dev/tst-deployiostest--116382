from django.conf import settings
from django.db import models
class Javed(models.Model):
    'Generated Model'
    wert = models.BigIntegerField(null=True,blank=True,)
    rel_user_1_1 = models.OneToOneField("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="javed_rel_user_1_1",)
    rel_user_n_n = models.ManyToManyField("users.User",blank=True,related_name="javed_rel_user_n_n",null=True,)
