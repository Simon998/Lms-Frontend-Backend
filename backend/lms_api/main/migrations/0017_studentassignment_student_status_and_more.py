# Generated by Django 5.0.2 on 2024-03-21 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_rename_details_studentassignment_detail'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentassignment',
            name='student_status',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='studentassignment',
            name='student_submission',
            field=models.FileField(null=True, upload_to='student_submissions/'),
        ),
    ]
