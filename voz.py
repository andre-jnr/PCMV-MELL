import speech_recognition as sr


def ouvir_microfone():
    microfone = sr.Recognizer()

    with sr.Microphone() as source:
        microfone.adjust_for_ambient_noise(source)

        print('Diga alguma coisa: ')

        audio = microfone.listen(source)

    try:
        frase = microfone.recognize_google(audio, language='pt-BR')

        print(frase)

    except sr.UnknownValueError:
        print('Não entendi :(')

    return frase


ouvir_microfone()
