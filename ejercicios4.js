/* let i= 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('numero par',i)

    }
    i++;
} */

/* for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log('numero impar',i)
    }
} */

/* let Tontos = ['ike', 'fafa', 'la prima', 'kai', 'gabobalicona','otue'];
for (let tonto of Tontos) {
    console.log(tonto);
} */

let tonto = {
    nombre: 'fafa',
    nivelDeEstupidez: '100',
    razonDeSuEstupidez: 'chismoso',
};

for (let estadisticas in tonto) {
    console.log(estadisticas, tonto[estadisticas])
}
/* aqui estaba jugando con while y con for 
para crear loops para saber si un numero es impar o par y 
iterar objetos o propiedades de un array*/




