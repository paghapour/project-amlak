from django.shortcuts import render

from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'pages/home.html'


class AboutUsView(TemplateView):
    template_name = 'pages/aboutus.html'


class ContactUsView(TemplateView):
    template_name = 'pages/contactus.html'


class RegMelkView(TemplateView):
    template_name = 'pages/reg_melk.html'

