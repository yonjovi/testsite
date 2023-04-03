from django.contrib import admin
from .models import Skill, Project, SpecificSkills
from django_summernote.admin import SummernoteModelAdmin


class SummerAdmin(SummernoteModelAdmin):
    summernote_fields = "description"


# admin.site.register(Skill)
admin.site.register(Project, SummerAdmin)
admin.site.register(SpecificSkills)
admin.site.register(Skill, SummerAdmin)


