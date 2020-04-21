class Persona{
  constructor(nombre, apellido, anos, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.anos = anos
    this.altura = altura
  }
  mayorMenorEdad(){
    let mayorDeEdad = 18
    if (this.anos < mayorDeEdad) {
      console.log(`${this.nombre} es menor de edad`);
    } else {
      console.log(`${this.nombre} es mayor de edad`);
    }
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, anos, altura) {
    super(nombre, apellido, anos, altura)
  }
  saludar(){console.log(`${this.nombre} es desarrollador`);}
}


let emmanuel = new Persona("Emmanuel", "Garcia", 28, 1.68);
let ricardo = new Persona("Ricardo", "Garcia", 13, 1.4);

emmanuel.mayorMenorEdad()
ricardo.mayorMenorEdad()

let emmanuelDev = new Desarrollador("Emmanuel", "Garcia", 28, 1.68)

emmanuelDev.saludar()


