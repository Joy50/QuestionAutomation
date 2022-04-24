from dataclasses import field
from rest_framework import serializers
from rest_framework import mixins
from .models import CourseName,QuestionType,SubjectName,ChapterName,QuestionData

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseName
        fields = '__all__'

class QuestionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionType
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectName
        fields = '__all__'

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChapterName
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionData
        fields = '__all__'