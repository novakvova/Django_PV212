py -m venv .venv

.venv\Scripts\activate.bat

pip install django

python.exe -m pip install --upgrade pip

django-admin startproject saloapi

cd saloapi

py manage.py runserver 5092

py manage.py migrate

py manage.py startapp product

python manage.py makemigrations

python manage.py migrate

py manage.py createsuperuser

admin

Qwerty1-

py manage.py runserver 5092

pip install djangorestframework

pip install django-cors-headers

py -m pip install Pillow

python manage.py makemigrations

python manage.py migrate

py manage.py runserver 5092


