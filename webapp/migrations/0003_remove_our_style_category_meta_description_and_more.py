# Generated by Django 4.2.7 on 2023-11-27 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0002_team'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='our_style_category',
            name='meta_description',
        ),
        migrations.RemoveField(
            model_name='our_style_category',
            name='meta_title',
        ),
        migrations.RemoveField(
            model_name='our_works_category',
            name='meta_description',
        ),
        migrations.RemoveField(
            model_name='our_works_category',
            name='meta_title',
        ),
        migrations.RemoveField(
            model_name='product_category',
            name='meta_description',
        ),
        migrations.RemoveField(
            model_name='product_category',
            name='meta_title',
        ),
    ]
