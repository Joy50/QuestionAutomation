from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class CourseName(models.Model):
    courseName = models.CharField(max_length=100)
    related_name ='coursename'
    def __str__(self):
        return self.courseName


class QuestionType(models.Model):
    typeTitle = models.CharField(max_length=50)
    related_name = 'questiontype'
    def __str__(self):
        return self.typeTitle


class SubjectName(models.Model):
    subjectName = models.CharField(max_length=100)
    related_name = 'subjectname'
    def __str__(self):
        return self.subjectName


class ChapterName(models.Model):
    subjectName = models.ForeignKey(SubjectName, on_delete=models.CASCADE,related_name = 'chaptername')
    chapterName = models.CharField(max_length=100)

    def __str__(self):
        return self.chapterName


class QuestionData(models.Model):
    course = models.ForeignKey(CourseName,on_delete=models.CASCADE)
    qType = models.ForeignKey(QuestionType, on_delete=models.CASCADE)
    subject = models.ForeignKey(SubjectName, on_delete=models.SET_NULL,null=True,blank=True,related_name='coursename')
    chapter = models.ForeignKey(ChapterName, on_delete=models.SET_NULL,null=True,blank=True,related_name='subjectname')
    '''DQ'''
    question = models.CharField(max_length=1000)
    answerDetails = HTMLField(default='')
    refDetails = models.CharField(max_length=100, null=True,blank=True)
    '''FIB'''
    answerFIB = models.CharField(max_length=100, null=True,blank=True)
    '''TF'''
    answerTF = models.CharField(max_length=100, null=True,blank=True)
    '''MCQ'''
    optionA = models.CharField(max_length=100, null=True,blank=True)
    optionB = models.CharField(max_length=100, null=True,blank=True)
    optionC = models.CharField(max_length=100, null=True,blank=True)
    optionD = models.CharField(max_length=100, null=True,blank=True)
    answerMCQ = models.CharField(max_length=100, null=True,blank=True)
    '''Others'''
    marks = models.PositiveIntegerField()

    def __str__(self):
        return self.question