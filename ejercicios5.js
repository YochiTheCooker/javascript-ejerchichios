
let array = [2, 5, -7, -15 ,-5, -100, 55];

/*aqui tengo que crear una funcion que me diga cuantos negativos hay*/

function cuantosNegativos(arr){
let cantidad = 0; /* entontes primero creo una variable que me va a decir la cantida y el valor por defecto es obvio 0 */
for (numero of arr) { /* entonces con un for loop decimos que cada numero que contiene del array vamos a ejecutar el siguiente codigo*/
    if (numero < 0) { /* SI el numero es menor a 0 (osea es negativo) vamos a aumentar el valor de cantidad*/
        cantidad++
    }
}
return cantidad; /* y retornamos el nuevo valor de la cantidad que genero la funcion*/
}
let resultado = cuantosNegativos(array)
console.log(resultado)