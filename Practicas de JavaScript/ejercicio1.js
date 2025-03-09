/*
    Realizar una funcion que nos permita realizar 4 operaciones aritmeticas,es decir, que nos permita sumar,restar,dividr y multiplicar. La funcion
    debera recibir 3 parametros estos deben ser los valor (a y b) y uno el nombre de la operacion.
    Si el parametro de la operacion contiene errores, lanzar un mensaje personalizado con dicho error a la consola.
*/

function calculadora(a,b,operacion){
        switch (operacion.toLowerCase()) {
            case "suma":
                return a + b
            case "resta":
                return a - b
            case "division":
                return a / b
            case "multiplicacion":
                return a * b
            default:
                return "Operacion incorrecta, intentelo nuevamente."
        }
}

console.log(calculadora(3,5,"suma"))