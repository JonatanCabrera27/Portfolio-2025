/*
    Realizar una funcion que almacene en un arreglo todos los numeros de a hasta b que sean pares
*/



function numerospares(a,b){
    arreglo = []
    for(let i = a; i <= b; i++ ){
        if(i % 2 == 0){
            arreglo.push(i)
        }
    }
    return arreglo
}

console.log(numerospares(1,10))