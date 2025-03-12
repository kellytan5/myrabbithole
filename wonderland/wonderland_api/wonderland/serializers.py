from rest_framework import routers,serializers,viewsets 
from .models import contact 

class ContactSerializer(serializers.HyperlinkedModelSerializer):
  class Meta: 
    model = contact 
    fields = ['id', 'name', 'email', 'description', 'created_at']