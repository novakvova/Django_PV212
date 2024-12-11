# pv212-python_web MVC

py --version
py -m venv .venv
.venv\Scripts\activate.bat
deactivate
```
code .
Install 
Django
vscode-icons
```

```
.venv\Scripts\activate.bat
py -m pip install Django
py -m pip install -U pip
py
>>>import django
>>>print(django.get_version())
>>>quit()
```

```
django-admin startproject blog
cd blog
py manage.py runserver 9178

-------App and Templates--------
.venv\Scripts\activate.bat
cd myblog
py manage.py migrate
py manage.py createsuperuser
admin

SuperAdminKrot1-
```

```
.venv\Scripts\activate.bat
pip install mysqlclient
pip install mariadb
cd blog
python manage.py migrate

```

```
.venv\Scripts\activate.bat
cd blog
python manage.py startapp posts
py manage.py makemigrations
python manage.py migrate
```

---------Testing ORM----------
```
py manage.py shell
>>>from posts.models import Post
>>>p=Post()
>>>p
>>>p.title="Пост №1. Краще ви вигулювати собак у парку."
>>>p.save()
>>>Post.objects.all()
>>>exit()
```

```
.venv\Scripts\activate.bat
cd blog
py manage.py runserver 9178
```

Register user
```
.venv\Scripts\activate.bat
cd blog
py manage.py startapp users
```