# Generated by Django 4.1.6 on 2023-02-10 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=180)),
                ('lastName', models.CharField(max_length=180)),
                ('email', models.EmailField(max_length=250)),
                ('phone', models.CharField(max_length=128, unique=True)),
                ('role', models.CharField(choices=[('U', 'User'), ('A', 'Admin')], default='U', max_length=1)),
            ],
        ),
    ]
