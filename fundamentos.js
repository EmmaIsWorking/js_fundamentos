let emmanuel = {
    name: 'Emmanuel',
    years: 28,
};
let lisa = {
    name: 'Lisa',
    years: 38,
};

function printname(persona){
    var { name }= persona;
    var { years } = persona;
    console.log(`Hola me llamo ${name} y tengo ${years} años`);
};
printname(lisa);
printname(emmanuel);

