import random
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('P', 'Personal'),
        ('T', 'Technical'),
    ]
    name = models.CharField(max_length=50)
    level = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(1)
        ]
    )
    is_proficient = models.BooleanField()
    category = models.CharField(max_length=1, choices=CATEGORY_CHOICES, default='Personal')
    connections = models.ManyToManyField('self', blank=True)
    color = models.CharField(max_length=7, default="#ffffff")

    def save(self, *args, **kwargs):
        # If the skill doesn't have a color already assigned
        if self.color == "#ffffff":
            # Define a list of custom colors to choose from
            colors = [
                "#ff0000",  # Red
                "#00ff00",  # Green
                "#0000ff",  # Blue
                "#ffff00",  # Yellow
                "#00ffff",  # Cyan
                "#ff00ff",  # Magenta
                "#000000",  # Black
                "#ffffff",  # White
            ]
            # Choose a random color from the list
            self.color = random.choice(colors)
        super().save(*args, **kwargs)
    # color = models.CharField(max_length=7, default='#' + ''.join([random.choice('0123456789ABCDEF') for i in range(6)]))
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name



class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image_url = models.URLField()
    duration = models.CharField(max_length=50)
    solved = models.BooleanField(default=False)
    skills = models.ManyToManyField(Skill, related_name="skills")
    project_url = models.CharField(max_length=250, default="")

    def __str__(self):
        return self.name


class SpecificSkills(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(1)
        ]
    )
    description = models.TextField()
    related_skill = models.ManyToManyField(Skill, related_name="related_skills")
