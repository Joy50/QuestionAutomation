from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import mixins
from .serializers import CourseSerializer,QuestionTypeSerializer,SubjectSerializer,ChapterSerializer,QuestionSerializer
from .models import CourseName,QuestionType,SubjectName,ChapterName,QuestionData

# Create your views here.
class CourseView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = CourseName.objects.all()
    serializer_class = CourseSerializer

class QuestionTypeView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = QuestionType.objects.all()
    serializer_class = QuestionTypeSerializer

class SubjectView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = SubjectName.objects.all()
    serializer_class = SubjectSerializer

class ChapterView(viewsets.GenericViewSet,mixins.ListModelMixin):
    queryset = ChapterName.objects.all()
    serializer_class = ChapterSerializer

class QuestionView(viewsets.ModelViewSet):
    queryset = QuestionData.objects.all()
    serializer_class = QuestionSerializer