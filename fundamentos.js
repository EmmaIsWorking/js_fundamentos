let emmanuel = {
    name: 'Emmanuel',
    years: 28,
};

function nameUpperCase(persona){
    var { name }= persona
    console.log(name.toUpperCase());
    
}
nameUpperCase(emmanuel)
nameUpperCase({name:'Lisa'})
