let emmanuel={
  nombre:'Emmanuel',
  edad: 28,
  altura: 1.68,
  libros:2,
}
let diana={
  nombre:'Diana',
  edad: 25,
  altura: 1.52,
  libros: 5,
}
let lisa={
  nombre:'Lisa',
  edad: 38,
  altura: 1.58,
  libros: 8,
}
let petter={
  nombre:'Petter',
  edad: 73,
  altura: 1.80,
  libros: 9,
}

let personasAltas = (persona) => persona.altura > 1.70
let personasPequeñas = (persona)=> persona.altura < 1.70


let personas = [emmanuel, diana, lisa, petter];

let convertirAlturaMetro = (personas) =>({
    ... personas,
    altura: personas.altura * 100
})

let totalLibros = (acum,personas) => acum += personas.libros

let filtroPersonasAltas = personas.filter(personasAltas)
let filtroPersonasBajas = personas.filter(personasPequeñas);
let convertirPersonasAlturaMetro = personas.map(convertirAlturaMetro)
let numeroDeLibros = personas.reduce(totalLibros,0)

console.log(filtroPersonasBajas)
console.log(filtroPersonasAltas)
console.log(convertirPersonasAlturaMetro)
console.log(numeroDeLibros);