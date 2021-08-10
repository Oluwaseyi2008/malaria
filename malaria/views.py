from django.shortcuts import render , redirect
from .models import Malaria
import joblib
import numpy as np

# Create your views here.

partial_result = None



def index(request):
    return render(request, 'index.html')


def result(request):
    return render(request, 'result.html' , context={"malaria": partial_result})


def malaria_predict(request):
    if request.method == "POST":
        malaria = Malaria()
        malaria.HBP = request.POST.get("HBP")
        malaria.Fever = request.POST.get("fever")
        malaria.nauseous = request.POST.get("nauseous")
        malaria.aches = request.POST.get("ache")
        malaria.Sweat = request.POST.get("sweating")
        malaria.Diarrhea = request.POST.get("Diarrhea")
        malaria.fatigue = request.POST.get("fatigue")
        malaria.AbdominalPain = request.POST.get("Abdominal")
        malaria.Headache = request.POST.get("headaches")
        malaria.HeartPain = request.POST.get("heart")


        ml_pickled_model = "malaria/Malaria Pickled model.pkl"

        malaria_data = np.array(
            [
                [
                    malaria.HBP,  malaria.Fever, malaria.nauseous,
                    malaria.aches, malaria.Sweat, malaria.Diarrhea,
                    malaria.fatigue,  malaria.AbdominalPain, malaria.Headache,
                    malaria.HeartPain
                ]
            ]
        ).reshape(1, 10)

        malaria_test_model = joblib.load(open(ml_pickled_model, 'rb'))

        prediction = malaria_test_model.predict(malaria_data)

        malaria.malaria_result = prediction[0]

        global partial_result

        print(malaria.malaria_result)

        malaria.save()

        if prediction[0] == 1:
            partial_result = "Your result is positive, You are advised to go for a lab test to confirm and seek treatment immediately. Also ensure to take more of anti bodies vitamins."
        else:
            partial_result = "Congratulations You don't have Malaria, but a strong recommendation for you is to treat yourself and stay off mosquites, Also take more of multi vitamins !!! "


        return redirect('result')
    return render(request, 'html-test.html')