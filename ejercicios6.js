/*Aqui hay que crear una funcion que le sume el impuesto al precio de producto*/ 

function precioCompleto (precio, impuesto) {
 return precio + precio * impuesto; /* entonces lo que hacemos es sumar el precio mas el precio multiplicado por el impuesto */

}

let resultado = precioCompleto (19.90, 0.15);
console.log(resultado);