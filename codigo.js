// CONSTRUCTOR
function grupo(nombre, genero, annio) {
    this.nombre = nombre;
    this.genero = genero;
    this.annio = annio;
}

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
// RESUELTO CON ARRAY
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

//Guardo los grupos que se van generando
const nuevosGrupos = [];

//Se generan los nuevos grupos y se agregan al Array
function agregarGrupo(nom, gen, ann) {
    let nuevoGrupo = new grupo(nom, gen, ann);
    nuevosGrupos.push(nuevoGrupo);
}

//Aquí es donde agrego los grupos nuevos
agregarGrupo("Anathema", "Post Rock", 1990);
agregarGrupo("Tool", "Metal Progresivo", 1999);
agregarGrupo("Cult of Luna", "Sludge Metal", 1998);
agregarGrupo("Pixies", "Rock Alternativo", 1986);
agregarGrupo("Intronaut", "Metal Progresivo", 1994);
agregarGrupo("Opeth", "Death Metal Progresivo", 1991);

//LLamo en Consola a los grupos generados
console.error('RESUELTO CON ARRAY');
console.table(nuevosGrupos);


//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
// RESUELTO CON OBJETOS
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

console.error('RESUELTO CON OBJETOS');

function generarGrupos(nombre, genero, annio) {
    const listadoGrupos = {
        item: new grupo(nombre, genero, annio),
    }
    console.table(listadoGrupos);
}
generarGrupos("Anathema", "Post Rock", 1990);
generarGrupos("Tool", "Metal Progresivo", 1999);
generarGrupos("Cult of Luna", "Sludge Metal", 1998);
generarGrupos("Pixies", "Rock Alternativo", 1986);
generarGrupos("Intronaut", "Metal Progresivo", 1994);
generarGrupos("Opeth", "Death Metal Progresivo", 1991);


//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
// RESUELTO CON ARROW FUNCTION
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

console.error('RESUELTO CON ARROW FUNCTION');

nuevoGrupo = (nombre, genero, annio) => {
    var nuevoGrupo2 = new grupo(nombre, genero, annio);
    return (console.table(nuevoGrupo2));
}

nuevoGrupo("Anathema", "Post Rock", 1990);
nuevoGrupo("Tool", "Metal Progresivo", 1999);
nuevoGrupo("Cult of Luna", "Sludge Metal", 1998);
nuevoGrupo("Pixies", "Rock Alternativo", 1986);
nuevoGrupo("Intronaut", "Metal Progresivo", 1994);
nuevoGrupo("Opeth", "Death Metal Progresivo", 1991);

