from django.shortcuts import render
from rest_framework import generics,permissions,viewsets,pagination
from django.http import HttpResponse
from . import serializers
from . import models
from django.http import Http404,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError


# Create your views here.

class VendorList(generics.ListAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer

class ProductList(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     category = self.request.GET.get('category')
    #     category = models.ProductCategory.objects.get(id=category)
    #     qs = qs.filter(category=category)
    #     return qs
    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')
        if category_id is not None:
            if category_id.isdigit():  # Ensure the category ID is numeric
                try:
                    category = models.ProductCategory.objects.get(id=category_id)
                    qs = qs.filter(category=category)
                except models.ProductCategory.DoesNotExist:
                    raise Http404("Category does not exist")
            else:
                raise Http404("Invalid category ID")
        return qs

class RelatedProducts(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class = pagination.PageNumberPagination


    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs=qs.filter(category=product.category).exclude(id=product_id)
        return qs

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer

# customers

class CustomerList(generics.ListAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer





class OrderList(generics.ListAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer

class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items


class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddressModel.objects.all()

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()


class CategoryList(generics.ListAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user=authenticate(username=username,password=password)
    if user:
        msg={
            'bool': True,
            'user': user.username
        }
    else:
        msg = {
            'bool':False,
            'msg': 'Invalid Username/Password!!!'
        }
    return JsonResponse(msg)


@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    password = request.POST.get('password')

    try:
        user = User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,

        )

        user.set_password(password)  # Hash the password
        user.save()

        if user:
            try:
                # create customer

                customer = models.Customer.objects.create(
                    user=user,
                    mobile=mobile
                )

                msg = {
                    'bool': True,
                    'user': user.id,
                    'customer': customer.id,
                    'msg': "Aww! Thank you for registering cutie💕. Go ahead and Login who you waiting for."
                }
            except IntegrityError:
                msg={
                    'bool': False,
                    'msg': 'oh! poor soul could have used your own number'
                }
        else:
            msg = {
                'bool': False,
                'msg': 'Oopsy... Something not right!'
            }
    except IntegrityError:
        msg = {
            'bool': False,
            'msg': "c'mon this user already exists😒, try something else cutie"
        }
    return JsonResponse(msg)










