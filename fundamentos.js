let emmanuel = {
    name: 'Emmanuel',
    years: 28,
};

function nameUpperCase({name}){
    console.log(name.toUpperCase());
    
}
nameUpperCase(emmanuel)
nameUpperCase({name:'Lisa'})
