from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import CourseView,QuestionTypeView,SubjectView,ChapterView,QuestionView

router = DefaultRouter()
router.register('allcourses',CourseView,basename='allcourses')
router.register('allquestiontype',QuestionTypeView,basename='allquestiontype')
router.register('allsubject',SubjectView,basename='allSubject')
router.register('allchapters',ChapterView,basename='allchapters')
router.register('allquestions',QuestionView,basename='allquestions')

urlpatterns = [
    path('',include(router.urls))
]