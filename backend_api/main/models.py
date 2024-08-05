from django.db import models
from django.contrib.auth.models import User

#vendor model
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):          # magic method
        return self.user.username

# Product category
class ProductCategory(models.Model):

    title = models.CharField(max_length=200)
    details = models.TextField(null=True)

    def __str__(self):          # magic method
        return self.title

# Product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name='category_product')
    vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=200, unique= True, null=True)
    details = models.TextField(null=True)
    price = models.FloatField()
    tags = models.TextField(null=True)
    image = models.ImageField(upload_to='product_imgs/',null=True)

    def __str__(self):
        return self.title

# Customer Model

class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)

    def __str__(self):          # magic method
        return self.user.username

# Order model

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,related_name='customer_orders')
    order_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % (self.order_time)


# Order item Model

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE,related_name='order_items') #when we create obj of order and we want to show the item, we can simple call order item from the order object. to fetch all order items from order
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):          # magic method
        return self.product.title


class CustomerAddressModel(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,related_name='customer')
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):          # magic method
        return self.address

# model for rating and review
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customer')
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_rating')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'


# product Images
class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_imgs')
    image = models.ImageField(upload_to='product_imgs/', null=True)

    def __str__(self):
        return self.image.url

