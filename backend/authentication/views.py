from django.contrib.auth import authenticate, login
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import UserSerializer

@api_view(['POST'])
def login_user(request):
    email = request.data.get('username')  # using username field for email
    password = request.data.get('password')
    
    user = authenticate(request, username=email, password=password)
    
    if user:
        login(request, user)
        return Response({
            'success': True,
            'is_admin': user.is_admin,
            'message': 'Login successful'
        })
    else:
        return Response({
            'success': False,
            'message': 'Invalid credentials'
        }, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register_user(request):
    email = request.data.get('email')
    username = request.data.get('username')
    password = request.data.get('password')
    
    if CustomUser.objects.filter(email=email).exists():
        return Response({
            'success': False,
            'message': 'Email already exists'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    user = CustomUser.objects.create_user(
        username=username,
        email=email,
        password=password
    )
    
    # Send email notification to Devayani
    try:
        send_mail(
            subject='New User Registration - Younicorn',
            message=f'New user registered:\nUsername: {username}\nEmail: {email}',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['devayani@yourdomain.com'],  # Replace with actual email
            fail_silently=False,
        )
    except Exception as e:
        print(f"Email sending failed: {e}")
    
    return Response({
        'success': True,
        'message': 'Account created successfully'
    })