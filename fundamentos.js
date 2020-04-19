let emmanuel = {
    nombre: 'Emmanuel',
    peso: 71
};

const INCREMENTO_PESO=0.3
const DIAS_ANO = 365

const AUMENTO_PESO= persona => persona.peso += INCREMENTO_PESO
const BAJAR_PESO= persona => persona.peso -= INCREMENTO_PESO
const COME_MUCHO = () => Math.random() < 0.3
const HACE_EJERCICIO = () => Math.random() < 0.4;

const META = emmanuel.peso -3
let dias=0;

while (emmanuel.peso > META) {
    if (COME_MUCHO()) {
        AUMENTO_PESO(emmanuel);
    }
    if (HACE_EJERCICIO()) {
        BAJAR_PESO(emmanuel);
    }
    dias += 1;
}
console.log(`pasaron ${dias} hasta que ${emmanuel.name} tuvo 68kg`)

// console.log(`el peso ${emmanuel.nombre} es de ${emmanuel.peso.toFixed(2)}`);
