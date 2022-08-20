from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from chat import views as chat_views

router = routers.DefaultRouter()
router.register(r"messages", chat_views.MessageViewSet)

urlpatterns = [
    path(r"", include(router.urls)),
    path("admin/", admin.site.urls),
]
