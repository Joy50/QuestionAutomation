from django.contrib import admin
from .models import CourseName,QuestionType,SubjectName,ChapterName,QuestionData

# Register your models here.
admin.site.register(CourseName)
admin.site.register(QuestionType)
admin.site.register(SubjectName)
admin.site.register(ChapterName)
admin.site.register(QuestionData)