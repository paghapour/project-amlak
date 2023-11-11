from django.shortcuts import render
from django.views import generic

from .models import Product


class ProductList(generic.ListView):
    # queryset = Product.objects.filter(active=True)
    model = Product
    template_name = 'products/product_list.html'
    context_object_name = 'products'


class ProductDetailView(generic.DetailView):
    model = Product
    template_name = 'products/product_detail.html'
    context_object_name = 'product'