# Generated by Django 4.1.4 on 2023-01-03 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mysite", "0006_skill_color"),
    ]

    operations = [
        migrations.AddField(
            model_name="skill", name="description", field=models.TextField(blank=True),
        ),
    ]