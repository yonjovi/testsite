# Generated by Django 4.1.4 on 2023-01-03 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mysite", "0005_skill_category_skill_connections"),
    ]

    operations = [
        migrations.AddField(
            model_name="skill",
            name="color",
            field=models.CharField(default="#ffffff", max_length=7),
        ),
    ]
