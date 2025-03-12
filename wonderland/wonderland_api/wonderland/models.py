from django.db import models

# Create your models here.
class contact(models.Model):
  #title
  name = models.CharField(max_length = 100) # name
  email = models.EmailField(unique=True) # email
  description = models.TextField(blank = True, null = True) # description 
  created_at = models.DateTimeField(auto_now_add = True) # created_at 

  def __str__ (self): 
    # return the contact name 
    return self.name 

class education(models.Model):
  title = models.CharField(max_length = 200) # title
  description = models.CharField(max_length = 200) # description
  location = models.CharField(max_length = 100) # location
  duration = models.CharField(max_length = 100) # duration 
  image = models.URLField(max_length=200, blank=True, null=True) # image URL field 
  name = models.CharField(max_length = 100) # name
  position = models.CharField(max_length = 100) # duration
  link = "Related Projects" 