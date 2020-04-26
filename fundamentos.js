const URL_API = 'https://swapi.dev/api/'
const URL_PEOPLE = 'people/:id/'
const URL_LUKE= `${URL_API}${URL_PEOPLE.replace(':id', 1)}`
let opts = {crossDomain: true}

// $.get(URL_LUKE, opts, function (persona) {
//   console.log(`Hola yo soy ${persona.name}`)
// })

let imprimerPersonaje = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

function personajes(id) {
  let urlPersonajes = `${URL_API}${URL_PEOPLE.replace(':id', id)}`
  $.get(urlPersonajes, opts, imprimerPersonaje)
}
function obtenerPersonajes() {
  for(i=1; i<= 10; i++){
     personajes(i) 
  }
}
obtenerPersonajes()