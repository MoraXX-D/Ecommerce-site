from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Vendor)
# admin.site.register(models.Product)
admin.site.register(models.ProductCategory)

# user to show mobile no in customer section og django admin panel
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['get_username','mobile']
    def get_username(self,obj):
        return obj.user.username
admin.site.register(models.Customer,CustomerAdmin)
admin.site.register(models.Order)
admin.site.register(models.OrderItems)
admin.site.register(models.CustomerAddressModel)
admin.site.register(models.ProductRating)

# product image
admin.site.register(models.ProductImages)

class ProductImageInLine(admin.StackedInline):
    model = models.ProductImages

class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    inlines = [
        ProductImageInLine,
    ]

# Ensure that the Product model is registered only once
admin.site.register(models.Product, ProductAdmin)

