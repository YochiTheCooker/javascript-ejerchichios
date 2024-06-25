/* el ejercicio consiste en hacer que la funcion nos diga cual el valor mayor entre los dos numeros.
¿Entonces como hice eso? Pues use la condicional If.
Lo que estamos declarando es que SI 'a > b' entonces nos de vuelva 'a', 
pero SI no es asi entonces nos devuelva 'b'. 
se pude hacer de otras formas, supongo que usando otras condicionales como for o switch, 
pero esta fue la forma mas rapida que se me ocurrio jeje.*/

function cualEsMayor (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    };
}; 


let mayor= cualEsMayor (10, 100)

console.log(mayor);

/* esto soy yo del futuro y explico el contexto, este ejercicio lo saque de un video. 
resulta que no sabia que el video no solo te da el ejercicio si no que tambien te lo responde,
yo no sabia y resulta que si esta es una de las respuestas correcta y me alegra por que por fin
empiezo a comprender javascript yupi!

por cierto la respuesta mas corta y sencilla se hace de la siquiente forma:

function cualEsMayor(a, b) {
    return (a > b) ? a : b;
}
*/