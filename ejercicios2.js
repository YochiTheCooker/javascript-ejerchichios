/* En este ejercicio tengo que hacer una funcion que me diga que 
resolucion estoy usando en base a los valores que le asigno en ancho y alto */

/** Resoluciones:
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

/* lo que hacemos es usar la condicional if, le decimos que si 
ancho es mayor o igual que el valor asignado de la resolocion Y ADEMAS (osea &&)
el alto es mayor o igual que el valor asignado de la resolucion entonces nos retorne
en la consola el nombre de la resolucion, esto lo hacemos con cada una de las resoluciones
y con sus ancho y alto definidos.*/
function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8k'
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4k'
    }
    else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD'
    }
    else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD'
    }
    else if (ancho >= 1280 && alto >= 720) {
        return 'HD'
    } else  {
        return false
    }
    /* por ultimo le decimos que si el ancho y el largo no se relaciona 
    a los valores de las resoluciones ya definidos entonces retorne un false*/
} 

let nombre = nombreResolucion(1920, 1080);
console.log (nombre)