let emmanuel={
  nombre:'Emmanuel',
  edad: 28,
  altura: 1.68,
}
let diana={
  nombre:'Diana',
  edad: 25,
  altura: 1.52,
}
let lisa={
  nombre:'Lisa',
  edad: 38,
  altura: 1.58,
}
let petter={
  nombre:'Petter',
  edad: 73,
  altura: 1.80,
}

let personasAltas = (persona) => persona.altura > 1.70
let personasPequeñas = (persona)=> persona.altura < 1.70

let personas = [emmanuel, diana, lisa, petter];

let filtroPersonasAltas = personas.filter(personasAltas)
let filtroPersonasBajas = personas.filter(personasPequeñas);

console.log(filtroPersonasBajas)
console.log(filtroPersonasAltas)