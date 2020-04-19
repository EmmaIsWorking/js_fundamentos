function persona(nombre, apellido, anos, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.anos = anos
  this.altura = altura
}
let emmanuel = new persona("Emmanuel", "Garcia", 28, 1.68);
let ricardo = new persona("Ricardo", "Garcia", 13, 1.4);
persona.prototype.mayorMenorEdad = function(){
  let mayorDeEdad = 18
  if (this.anos < mayorDeEdad) {
    console.log(`${this.nombre} es menor de edad`);
  } else {
    console.log(`${this.nombre} es mayor de edad`);
  }
}

emmanuel.mayorMenorEdad()
ricardo.mayorMenorEdad()



