import os 
import time

def apagarPC():
    tiempo_act = time.strftime("%H:%M")
    tiempo_shoutdown = "04:00"
    if tiempo_act == tiempo_shoutdown:
        os.system("shutdown /s /t 1")
        return True


print("\n","-"*6,"Iniciando Script - el apagado se realizara a las 04 HS","-"*6,"\n")
while True:
    exec = apagarPC()
    if exec:
        break
