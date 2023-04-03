import json
from datetime import datetime
from django.db.models.signals import post_save, post_delete
from django.shortcuts import render

from .models import Skill, Project


def portfolio(request):
    skills = Skill.objects.all()
    projects = Project.objects.all()
    current_year = datetime.now().year
    context = {
        'skills': skills,
        'projects': projects,
        'current_year': current_year,
    }
    return render(request, 'mysite/portfolio.html', context)


def index(request):
    skills = Skill.objects.all()
    projects = Project.objects.all()
    current_year = datetime.now().year
    context = {
        'skills': skills,
        'projects': projects,
        'current_year': current_year,
    }
    return render(request, 'mysite/index.html', context)


def update_skills_graph():
    nodes = []
    links = []

    for skill in Skill.objects.all():
        nodes.append({'id': skill.id, 'name': skill.name, 'category': skill.category})
        for connection in skill.connections.all():
            links.push({'source': skill.id, 'target': connection.id})

    return {'nodes': nodes, 'links': links}


def update_skills_graph_on_save(sender, instance, **kwargs):
    data = update_skills_graph()
    with open('static/skills-graph-data.json', 'w') as f:
        f.write(json.dumps(data))


def update_skills_graph_on_delete(sender, instance, **kwargs):
    data = update_skills_graph()
    with open('static/skills-graph-data.json', 'w') as f:
        f.write(json.dumps(data))


post_save.connect(update_skills_graph_on_save, sender=Skill)
post_delete.connect(update_skills_graph_on_delete, sender=Skill)
