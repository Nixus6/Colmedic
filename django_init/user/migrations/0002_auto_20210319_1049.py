# Generated by Django 3.1.7 on 2021-03-19 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='type_user',
            field=models.SmallIntegerField(null=True),
        ),
    ]
