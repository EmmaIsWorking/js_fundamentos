let emmanuel = {
    nombre: 'Emmanuel',
    peso: 71
};

const DIAS_ANO = 365
const INCREMENTO_PESO=.2 
const PERDIDA_PESO = persona => persona.peso -= INCREMENTO_PESO;
const AUMENTO_PESO = persona => persona.peso += INCREMENTO_PESO;

for(let i=0; i<=DIAS_ANO; i++ ){
    let random = Math.random();
    if(random <.25){
        PERDIDA_PESO(emmanuel)
    }else if(random >.50){
        AUMENTO_PESO(emmanuel)
    }
}
console.log(`el peso ${emmanuel.nombre} es de ${emmanuel.peso.toFixed(2)}`);
