/* aqui tengo que crear una funcion que creer arrays con la longitud de elementos que yo quiera en este caso 7 */
let longitud = 7

function crearArray(n){ 
    if (n <= 0){  /* primero le decimos que si la longitud es menor o igual que cero nos retorne un array vacio */
        return [];
    }
    let arr = [];                /* entonces creamos una variable que va valer un array vacio */
    for (let i = 0; i < n; i++){ /*usamos un for loop y creamos una variable que se llama 'i' que va ser el que aummente los valores dentro del array, tambien le decimos al for que si i 
                                es menor que la longitud (representada por n) siga con la siguiente condicion que va ser que i tiene que aumentar */
        arr[i] = i + 1;         /* metemos la variable i dentro del array y le decimos que array con i es igual a i + 1, esto lo hacemos para que no empiece a agregarvalores en 0 
                                y conmience con 1*/
    }
    return arr; /* y retornamos */
}  
let resultado = crearArray (longitud);
console.log(resultado);