"""
URL configuration for backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

    http post http://127.0.0.1:8000/api/token/ username=eren password=eren1234

    http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwODEzMDc5LCJpYXQiOjE3MjA4MTI3NzksImp0aSI6ImY3Mzc1ODAxYjRmODR
    jZjNhYTEzZDljOTc3ZTgwNWYzIiwidXNlcl9pZCI6MX0.Zrwqvj8KMZeM8zqGXkOqxirQOWPgmfEtMRA-Z1f3NLI"

    http http://127.0.0.1:8000/api/token/refresh refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDg5OTE3OSwiaWF0IjoxNzIwODEyNzc5LCJqdGkiOiIxZWY0Y2JlYjgzYmI0ZDcyYjk0YzkwYzE1ZmQ4ZjdmOSIsInVzZXJfaWQiOjF9
    .l9opSidKFsM_c_nDle6rBp7DPY930l_TJ7nTC4yGxWk



"""
from django.contrib import admin
from django.urls import path, include
# from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api-auth/',include('rest_framework.urls')),
    # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]
