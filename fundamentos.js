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

let personas = [emmanuel, diana, lisa];

for(let i = 0; i<personas.length; i++){
  personas[i]
  console.log(`${personas[i].nombre} tiene ${personas[i].edad} años y mide ${personas[i].altura}`)
}