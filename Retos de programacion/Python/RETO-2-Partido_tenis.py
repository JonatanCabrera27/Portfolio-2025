'''
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 '''

puntos = [
    "Love",
    15,
    30,
    40,
    "Deuce",
    "Ventaja"
]

secuencia = []

def game(secuencia):
    if secuencia != []:
        p1 = ""
        p2 = ""

        count1 = 0
        count2 = 0
        
        for player in secuencia:
            if player == "P1":
                count1 +=1
            p1 = puntos[count1]
            if player == "P2":
                count2 +=1
            p2 = puntos[count2]
            
            if type(p1) == int and type(p2) == int:
                if  p1 == 40 and p2 == 40:
                    print(puntos[count1])
                elif p1 > p2 and p1 == 40:
                    print(f"{p1} - {p2}")       
                    print(f"{puntos[-1]} P1")
                    print("Ha ganado el P1")
                    break
                elif p2 > p1 and p2 == 40:
                    print(f"{p1} - {p2}")       
                    print(f"{puntos[-1]} P2")
                    print("Ha ganado el P2")
                    break
                elif p1 == p2 and p1 == 40 and p2 == 40:
                    print(puntos[-2])
                else:
                    print(f"{p1} - {p2}")       
            else:
                print(f"{p1} - {p2}")
    else:
        print("No se agrego secuencia alguna de puntos.")
    


while True:
    sec = input("¿Quien hizo punto? P1 o P2: ").upper()
    if sec == "":
        break
    if sec != "P1" or sec != "P2":
        print("Dato ingresado erroneo, intentelo nuevamente.")
    else:   
        secuencia.append(sec)

print(secuencia)
print(game(secuencia))

