let emmanuel = {
    name: 'Emmanuel',
    years: 28,
};

function nameUpperCase(persona){
    var { name }= persona
    console.log(name.toUppercae)
}
nameUpperCase(emmanuel)
nameUpperCase({name:'Lisa'})

//  Parámetros como referencia o como valor

function personaMasVieja(persona) {
    return{
        ...persona,
        years: persona.years +1,
    }
}
let emmanuelMasViejo = personaMasVieja(emmanuel)

console.log(emmanuel)
console.log(emmanuelMasViejo)

