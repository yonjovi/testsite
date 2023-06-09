# Generated by Django 4.1.4 on 2023-01-02 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mysite", "0004_project_skills_specificskills"),
    ]

    operations = [
        migrations.AddField(
            model_name="skill",
            name="category",
            field=models.CharField(
                choices=[("P", "Personal"), ("T", "Technical")],
                default="Personal",
                max_length=1,
            ),
        ),
        migrations.AddField(
            model_name="skill",
            name="connections",
            field=models.ManyToManyField(blank=True, to="mysite.skill"),
        ),
    ]
