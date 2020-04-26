class Persona {
  constructor(nombre, apellido, anos, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.anos = anos
    this.altura = altura
  }
  mayorMenorEdad() {
    let mayorDeEdad = 18
    if (this.anos < mayorDeEdad) {
      console.log(`${this.nombre} es menor de edad`);
    } else {
      console.log(`${this.nombre} es mayor de edad`);
    }
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, anos, altura) {
    super(nombre, apellido, anos, altura)
  }
  saludar(fn) {
    console.log(`Soy ${this.nombre}`);
    if (fn === true) {
      console.log(`${this.nombre} eres desarrollador`);
    } else {
      console.log(`No ${this.nombre} eres desarrollador`);
    }
  }
}

let emmanuel = new Persona("Emmanuel", "Garcia", 28, 1.68);
let ricardo = new Persona("Ricardo", "Garcia", 13, 1.4);
let lisa = new Desarrollador('Lisa', 'Brandau', 38, 1, 6)
let emmanuelDev = new Desarrollador("Emmanuel", "Garcia", 28, 1.68)

emmanuel.mayorMenorEdad()
ricardo.mayorMenorEdad()
emmanuelDev.saludar(true)
lisa.saludar()
