let contador = 0
const LLUEVE = () => Math.random() < 0.25;

do {
  contador++;
  
} while (!LLUEVE());

if(contador === 1){
    console.log(`Llovio ${contador} día `);
}else{
    console.log(`Llovio ${contador} días `);

}

