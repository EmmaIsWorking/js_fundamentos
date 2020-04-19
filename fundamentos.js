let pregunta = prompt('¿Cuál es su signo zodiacal')

switch (pregunta) {
  case 'Aries':
  case 'aries':
    console.log(
      'El carnero con el que viajaron Frixio y Hele, cuando salieron de su país natal para llegar a la Colquide. Fue posteriormente el vellocino de oro.');
    break;
  case 'Tauro':
  case 'tauro':
    console.log(
      'El Toro de Creta, una bestia mítica que habitaba en aquella zona.');
    break;
  case 'Géminis':
  case 'Geminis':
  case 'geminis':
    console.log(
      'Los gemelos Cástor y Pólux. Pólux era inmortal, no así su hermano Cástor. Cuando Cástor murió, Pólux ofreció su inmortalidad por salvar a su hermano.');
    break;
  case 'Cancer':
  case 'Cáncer':
  case 'cáncer':
  case 'cancer':
    console.log(
      'El cangrejo que envió Hera a ayudar a la Hidra de Lerna, cuando ésta luchaba contra Hércules.');
    break;
  case 'Leo':
  case 'leo':
    console.log(
      'El León de Nemea, muerto a manos de Hércules, que lo estranguló, pues su piel era impenetrable. El héroe lo despellejó con sus propias garras (lo único que podía herirlo) y se quedó la piel como su símbolo.');
    break;
  case 'Virgo':
  case 'virgo':
    console.log(
      'El mito es el de Astrea, hija de Zeus y Temis. Ayudó a su padre como portadora de los rayos durante la guerra con los titanes. En recompensa a su lealtad, Zeus la subió al cielo y situó entre las estrellas, dando origen a esta constelación y fin a la presencia entre los humanos de la última inmortal de la Edad Dorada.');
    break;
  case 'Libra':
  case 'libra':
    console.log(
      'Es el único signo que no es un animal. Hasta los tiempos de Julio César, las estrellas de Libra formaban parte de las pinzas de Escorpio. Para mantenerse con doce signos zodiacales, se eliminó el Ofiuco.6​7​ En algunas representaciones romanas se ilustraba a Julio César portando una balanza, como símbolo de su poder y justicia. Más tarde se suprimiría al gobernante romano y se mantendría la figura de la balanza. Hoy en día se asocia a Dice, la diosa de la Justicia.');
    break;
  case 'Escorpio':
  case 'escorpio':
    console.log(
      'Escorpión que la diosa Artemisa envió contra el gigante cazador Orión. Orión lo pisó y el escorpión le clavó el aguijón. Ambos murieron y Zeus puso a cada uno en frente del otro, para que no se peleasen.');
    break;
  case 'Sagitario':
  case 'sagitario':
    console.log('El centauro Quirón, médico de los médicos, cansado de su condición de inmortal, decidió cambiarla por la salvación de Prometeo. Cuando el trato estuvo formalizado, Prometeo le preguntó,¿Por qué lo has hecho? Ahora que estás muerto, por mucho que te canses, no vas a poder cambiarlo...');
    break;
  case 'Capricornio':
  case 'capricornio':
    console.log(
      'Representación de la Cabra Amaltea, la que amamantó a Zeus cuando su madre Rea lo escondió de la vista de su padre Cronos.');
    break;
  case 'Acuario':
  case 'acuario':
    console.log(
      'El joven Ganímedes, el escanciador de los dioses en el Olimpo. Un joven de extremada belleza que consiguió el amor del dios Zeus.');
    break;
  case 'Piscis':
  case 'piscis':
    console.log(
      'Cuando los dioses huyeron del titán Tifón, muchos adoptaron formas animales. Eros y Afrodita lo hicieron en forma de peces y fueron pescados por un pescador. Otras fuentes dicen que fueron los malditos Cadmo y Harmonía los que fueron pescados.');
    break;
  default:
      console.log('Signo incorrecto');
      console.log('Recarga de nuevo y escribe tu signo');
      break;
}

