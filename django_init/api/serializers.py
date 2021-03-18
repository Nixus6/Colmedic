from rest_framework import serializers
from .models import Quotes


class QuotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quotes
        fields = ('id_Quotes',
                  'date',
                  'time',
                  'hour',
                  'created_at')
