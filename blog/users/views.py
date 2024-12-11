from django.shortcuts import redirect, render
from django.contrib.auth.hashers import make_password
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("posts:list")
        # username = request.POST['firstname']
        # email = request.POST['email']
        # password = request.POST['password']
        # confirm_password = request.POST['confirmPassword']

        # if password != confirm_password:
        #     return render(request, 'users/register.html')
        
        # hashed_password = make_password(password)

        # user = User(username=username, email=email, password=hashed_password)
        # user.save()

        # print(f"Користувач зареєстрований: {user}")
        # return render(request, "registration_success.html")
    form = UserCreationForm()
    return render(request, 'users/register.html', { "form": form })
