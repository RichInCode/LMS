# Generated by Django 2.1 on 2018-10-03 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20181003_1253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='message',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
