let emmanuel={
    name:'Emmanuel',
    age: 28,
};
let ricardo={
    name: 'Ricardo',
    age: 13
};

const MAYORIA_EDAD = 18;
const ES_MENOR_EDAD = (persona)=> {
    console.log(`${persona.name} es menor de edad`);
}

let esMayorDeEdad= (persona) => {
    if (persona.age >= MAYORIA_EDAD) {
    console.log(`${persona.name} es mayor de edad por que tiene ${persona.age} años`
    );
    } else {
    console.log(`${persona.name} es menor de edad por que tiene ${persona.age} años`
    );
    }
};

esMayorDeEdad(emmanuel)
ES_MENOR_EDAD(ricardo);

