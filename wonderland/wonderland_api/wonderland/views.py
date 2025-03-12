from django.shortcuts import render
# parsing data from the client
from rest_framework.parsers import JSONParser
# To bypass having a CSRF token
from django.views.decorators.csrf import csrf_exempt
# for sending response to the client
from django.http import HttpResponse, JsonResponse
# API definition for contact 
from .serializers import ContactSerializer 
# contact model 
from .models import contact

# Create your views here.
@csrf_exempt
def contacts(request):
  if(request.method == 'GET'):
    # get all contacts
    contacts = contact.objects.all()
    # serialize the contact data 
    serializer = ContactSerializer(contacts, many=True)
    # return a Json response 
    return JsonResponse(serializer.data, safe=False)
  elif(request.method == 'POST'):
    # parse the incoming information
    data = JSONParser().parse(request)
    # instanciate with the serializer
    serializer = ContactSerializer(data=data)
    # check if the sent information is okay
    if(serializer.is_valid()):
      # if okay, save it on the database
      serializer.save()
      # provide a Json Response with the data that was saved
      return JsonResponse(serializer.data, status=201)
      # provide a Json Response with the necessary error information
    return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def contact_detail(request, pk):
  try: 
    # obtain the contact with the passed id
    contact = contact.objects.get(pk=pk)
  except: 
    # respond with a 404 error message
    return HttpResponse(status=404) 
  if(request.method == 'PUT'):
    # parse the incoming information
    data = JSONParser().parse(request)  
    # instanciate with the serializer
    serializer = ContactSerializer(contact, data=data)
    # check whether the sent information is okay
    if(serializer.is_valid()):  
        # if okay, save it on the database
        serializer.save() 
        # provide a JSON response with the data that was submitted
        return JsonResponse(serializer.data, status=201)
    # provide a JSON response with the necessary error information
    return JsonResponse(serializer.errors, status=400)
  elif(request.method == 'DELETE'):
    # delete the task
    contact.delete() 
    # return a no content response.
    return HttpResponse(status=204) 