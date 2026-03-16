const prompt = require("prompt-sync")({sigint: true});
const {PaladiHuma, MagElf, GuerrerNan, ArquerMitja} = require("./clases/index");

// --- Definición de funciones ---

function crearPersonatge () {
    //Aquí hay la opción de escoger un personaje del 1 al 4

    let op;
    do {
        console.log("1. Paladí humà");
        console.log("2. Mag elf");
        console.log("3. Guerrer nan");
        console.log("4. Arquer mitjà");
        op = Number(prompt("Escull el teu personatge: "));
        // control de que te pasen un numero y no una letra
    } while (op < 1 || op > 4);

    //Dependiendo de lo que escoja el usuario, le crea ese tipo de personaje.
    if (op === 1) return new PaladiHuma();
    if (op === 2) return new MagElf();
    if (op === 3) return new GuerrerNan();
    if (op === 4) return new ArquerMitja();

}

function crearEnemicAleatori () {
    // Esto básicamente escoge un número del 1 al 4.
    // El Math.random() * 4 da un decimal del 0 al 4.
    // Luego el ceil lo redondea hacia arriba, osea que tendríamos del 1 al 4.
    let tipus = Math.ceil(Math.random() * 4);

    //dependiendo del número que salga, se creará el tipo de personaje.
    if (tipus === 1) return new PaladiHuma();
    if (tipus === 2) return new MagElf();
    if (tipus === 3) return new GuerrerNan();
    if (tipus === 4) return new ArquerMitja();
}

function combat (jugador) {
    //Aqui defino el enemigo, que es aleatorio porque lo hace la función.
    let enemic = crearEnemicAleatori();

    //Luego inicio el combate entre el jugador y el enemigo. 
    //Pongo qué tipo de personaje tiene el jugador y el enemigo
    console.log("--- INICI DEL COMBAT ---");
    console.log(jugador.tipus + "VS" + enemic.tipus);

    let primer;
    let segon;

    //Aquí mira si la velocidad del jugador es mayor a la del enemigo.
    //Si lo es, el jugador va primero, sino irá segundo.
    // Es diu el guerrer i el seu tipus
    
    if (jugador.velocitat >= enemic.velocitat) {
        primer = jugador;
        segon = enemic;
        console.log("El jugador " + primer.tipus + " ataca primer.");
    } else {
        primer = enemic;
        segon = jugador;
        console.log("L'enemic " + primer.tipus + " ataca primer.");
    }
}



// Variables globales para guardar el estado de la partida
let personatgeActual = null; // Al principio no tenemos personaje part1
let victorias = 0;          // estadisticas iniciales 
let derrotas = 0;
let opcion = "";


// --- Menú personaje ---

console.log("---ESCULL EL TEU PERSONATGE---");
personatgeActual = crearPersonatge();
console.clear();
console.log("\nPerfecte, has escollit el teu personatge!\n");
// aqui estaria bien meter un delay y luego el console.clear()
// console.clear();

// --- Menú principal ---

// utilizamos un bucle-while porque queremos que  el menu se muestre al menos una vez 
do {

    console.log("\n=== COMBATS AUTOMÀTICS ===");
    console.log("1. Crear nou personatge");
    console.log("2. Veure estadístiques");
    console.log("3. Lluitar");
    console.log("4. Sortir");


    //usamos el metodo Number() para convertir el prompt a number y que funcione el case
    opcion = Number(prompt("Escull una opción: "));

    // 
    switch (opcion) {
        case 1:
            console.log("\n--- CREAR PERSONATGE ---");
            // aqui llamaremos a una función para crear el personaje (lo haremos más adelante)
            // por ejem:  personajeActual = crearNuevoPersonaje(); parte 1

            // Aqui llamo a la función q crea el personaje 
            personatgeActual = crearPersonatge();

            // El enunciado dice que al crear uno nuevo, se reinician las estadisticas
            victorias = 0;
            derrotas = 0;
            console.log("Personatge creat amb èxit. Estadístiques reiniciades.");
            break;

        case 2:
            console.log("\n--- ESTADÍSTIQUES ---");
            // en esta parte mostramos las victorias y derrotas 
            console.log("Victories: " + victorias);
            console.log("Derrotes: " + derrotas);
            break;

        case 3:
            console.log("\n--- LLUITAR ---");
            // no puedemos luchar si no hemos creado un personaje primero
            if (personatgeActual === null) {
                console.log("Error: Primer has de crear un personatge, tria l'opció '1'!");
            } else {
                console.log("Buscant rival... Preparat pel combat!");
                // aquí iria bien que pusieramos un delay de un segundo con la libreria que nos han dado en clase
                
                // aqui llamaremos a una función creada para el combate 
                // por ejem : iniciarCombat();

                //Aquí llamo a la funcion del combate con el personaje que haya escogido el usuario
                combat(personatgeActual);
            }
            break;

        case 4:
            // Salimos del programa 
            console.log("\nSortint del programa... Fins aviat!");
            break;

        default:
            // Por si el usuario pulsa una tecla equivocada
            console.log("\nOpció no vàlida. Si us plau, tria 1, 2, 3 o 4.");
            break;
    }

} while(opcion !== "4"); //el bucle se repite hasta que no elija la opcion '4' (salir)

