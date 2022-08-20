from .models import Message
from .serializers import MessageSerializer

from rest_framework import viewsets


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by("created_at")
    serializer_class = MessageSerializer
