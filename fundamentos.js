// let edad = 27;

// edad += 1;

// let precioVino = 23.43

// let totalVino = Math.round(precioVino * 3.45)

// strgTotalVino= totalVino.toFixed(2)

// intTotalVino = parseFloat(strgTotalVino)

// ---

let emmanuel = {
    name: 'Emmanuel',
    edad: 28,
}

function nameUpperCase({name}) {
    console.log(name.toUpperCase());
}

nameUpperCase(emmanuel)
nameUpperCase({name: 'Lisa'})