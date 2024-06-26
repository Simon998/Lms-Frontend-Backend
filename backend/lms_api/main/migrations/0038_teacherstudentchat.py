# Generated by Django 5.0.2 on 2024-04-01 09:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0037_alter_attemptquiz_options_alter_chapter_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeacherStudentChat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg_from', models.CharField(max_length=250)),
                ('msg_text', models.TextField()),
                ('msg_time', models.DateTimeField(auto_now_add=True)),
                ('student', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.student')),
                ('teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.teacher')),
            ],
            options={
                'verbose_name_plural': '99. Messages',
            },
        ),
    ]
