from django.shortcuts import render
from rest_framework import generics
from .serializers import QuotesSerializer
from .models import Quotes

# Create your views here.

# def main(request):
#     return HttpResponse("<h1>Hello World</h1>")


class QuotesView(generics.CreateAPIView):
    queryset = Quotes.objects.all()
    serializer_class = QuotesSerializer
