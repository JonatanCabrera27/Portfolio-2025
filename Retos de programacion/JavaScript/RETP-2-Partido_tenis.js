/*
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
 */

const puntos = [
    "Love",
    15,
    30,
    40,
    "Deuce",
    "Ventaja"
]

let secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]

function game(secuencia){
    let p1;
    let p2;
    let count1 = 0
    let count2 = 0

    for(player of secuencia){
        if(player == "P1"){
            count1 = count1 + 1
        }
        p1 = puntos[count1]
        if(player == "P2"){
            count2 += 1
        }
        p2 = puntos[count2]
        
        if(p1 == 40 && p2 == 40){
            console.log(puntos[4])
        }else if(p1 > p2 && p1 == 40){
            console.log(`
                ${p1} - ${p2}
                ${puntos[5]} P1
                Ha ganado el P1
            `)
            return
        }else if(p2 > p1 && p2 == 40){
            console.log(`
                ${p1} - ${p2}
                ${puntos[5]} P2
                Ha ganado el P2
            `)
            return
        }else if(p1 == p2 && p1 == 40 && p2 == 40){
            console.log(puntos[4])
            return
        }else{
            console.log(`${p1} - ${p2}`)
        }
    }

}

game(secuencia);