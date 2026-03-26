const prompt = require("prompt-sync")({sigint: true});
const {PaladiHuma, MagElf, GuerrerNan, ArquerMitja} = require("clases");
const {TerminalUtils} = require("terminalutils");
const {Menus} = require("./ui/Menus.js"); //
const fs = require("fs");

// --- Definición de funciones ---

function crearPersonatge () { 

    //Aquí hay la opción de escoger un personaje del 1 al 4
    let op;
    do {
        Menus.mostrarMenuPersonatges(); // menu ui remplazando a otros console.log
        TerminalUtils.print("Escull el teu personatge: ", "#FF00FF", "", false);
        op = Number(prompt(""));
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
// añadi async a la funcion combat para la linea 115 y poder usar awit 
// y asi espere un segundo para imprimir cada ronda, y no aparescan todas de golpe 
async function combat (jugador) {
    //Aqui defino el enemigo, que es aleatorio porque lo hace la función.
    let enemic = crearEnemicAleatori();

    //Luego inicio el combate entre el jugador y el enemigo. 
    //Pongo qué tipo de personaje tiene el jugador y el enemigo

    // Diseño del inicio del combate
    TerminalUtils.print("\n==============================", "#FF0000", "", true); // Rojo
    TerminalUtils.print("       INICI DEL COMBAT       ", "#FFD700", "", true); // Amarillo
    TerminalUtils.print("==============================\n", "#FF0000", "", true);
    
    // Mostramos los combatientes en color celeste
    TerminalUtils.print("   " + jugador.tipus + " VS " + enemic.tipus + "\n", "#00FFFF", "", true);

    let primer;
    let segon;

    //Aquí comparo las velocidades entre el jugador y el enemigo
    //Si la velocidad del jugador es mayor, va primero, sino irá segundo.
    // Es diu el guerrer i el seu tipus
    
    if (jugador.velocitat >= enemic.velocitat) {
        primer = jugador;
        segon = enemic;
        TerminalUtils.log(" El jugador " + primer.tipus + " és més ràpid i ataca primer.", "#CCCCCC");
    } else {
        primer = enemic;
        segon = jugador;
        TerminalUtils.log(" L'enemic " + primer.tipus + " és més ràpid i ataca primer.", "#CCCCCC");
    }


    let ronda = 1;

    //bucle para hacer más de una ronda
    //mientras los dos estén vivos, continua la partida
    while (jugador.vida > 0 && enemic.vida > 0) {

        //TENGO Q METER LO DE ESQUIVAR TODAVIA

        //Aqui enseño la ronda en la que estamos y la vida de los personajes
       //Titulo de la ronda en Amarillo
        TerminalUtils.print("\n--- RONDA " + ronda + " ---", "#FFFF00", "", true);

        //Vidas de los personajes (Jugador en Verde, Enemigo en Rojo)
        TerminalUtils.print("Vida " + jugador.tipus + ": " + jugador.vida, "#00FF00", "", true);
        TerminalUtils.print("Vida " + enemic.tipus + ": " + enemic.vida, "#FF0000", "", true);

        //escoje una acción aleatoria
        //el math random da un decimal del 0 al 2
        //el math floor lo redondea del 0 al 1
        let accio1 = Math.floor(Math.random() * 2);
        let msg1;
        if (accio1 == 0) {
            msg1 = primer.ataquePrincipal(segon);
        } else {
            msg1 = primer.ataqueSecundario(segon);
        }
        //Texto del primer ataque en Naranja
        TerminalUtils.print("⚔️  " + msg1, "#FFA500", "", true); 
        
        if (segon.vida <= 0 ) break;

        let accio2 = Math.floor(Math.random() * 2);
        let msg2;
        if (accio2 == 0) {
            msg2 = segon.ataquePrincipal(primer);
        } else { 
            msg2= segon.ataqueSecundario(primer);
        }
        //Texto del segundo ataque en Naranja
        TerminalUtils.print("⚔️  " + msg2, "#FFA500", "", true);

        ronda++;
        //para que el temrinal espere un segundo antes de mostrar de golpe todas las rondas
        await TerminalUtils.espera(1000);

    }
    TerminalUtils.print("\n==============================", "#FFD700", "", true);
    if (jugador.vida <= 0 && enemic.vida <= 0) {
            TerminalUtils.print(" Els dos heu perdut! Guanya el teu contrincant.", "#CCCCCC", "", true);
            return false;
        } else if ( jugador.vida > 0 ) {
            TerminalUtils.print("🏆 Felicitats, has guanyat el combat!", "#00FF00", "", true);
            return true;
        } else {
            TerminalUtils.print(" Has perdut. Guanya l'enemic.", "#FF0000", "", true);
            return false;
        }
}

/**
 * Mensaje de creación de personaje con exito, delay implementado
 */
async function personajeCreadoConExito() {
    TerminalUtils.log("✅Personatge creat amb èxit. Estadístiques reiniciades.", "#62f088");
    await TerminalUtils.espera(1600);
}


async function main() {
// Variables globales para guardar el estado de la partida
let personatgeActual = null; // Al principio no tenemos personaje part1
let victorias = 0;          // estadisticas iniciales 
let derrotas = 0;
let opcion;


// --- Menú personaje ---
//elimine el console.log anterior para que se vea el de menu ui crear personaje con color
personatgeActual = crearPersonatge();
console.clear();
TerminalUtils.print("\n✨ Perfecte, has escollit el teu personatge! ✨\n", "#00FF00", "", true); // mensajes ui despues de elegir una opcion
await TerminalUtils.espera(1000);

// --- Menú principal ---

// utilizamos un bucle-while porque queremos que  el menu se muestre al menos una vez 
do {

    Menus.mostrarMenuPrincipal(); // menu ui para el menu principal 

    // Imprimimos el texto en blanco (#FFFFFF), SIN salto de línea al final (false)
        TerminalUtils.print("Escull una opció: ", "#FFFFFF", "", false);
    //usamos el metodo Number() para convertir el prompt a number y que funcione el case
    //El prompt se queda vacío, pero recogerá lo que el usuario escriba
    opcion = Number(prompt(""));

    // 
    switch (opcion) {
        case 1:
            console.clear();
            console.log("\n--- CREAR PERSONATGE ---");
            // aqui llamaremos a una función para crear el personaje (lo haremos más adelante)
            // por ejem:  personajeActual = crearNuevoPersonaje(); parte 1

            // Aqui llamo a la función q crea el personaje 
            personatgeActual = crearPersonatge();

            // El enunciado dice que al crear uno nuevo, se reinician las estadisticas
            victorias = 0;
            derrotas = 0;
            await personajeCreadoConExito();
            break;

        case 2:
            console.clear();
            console.log("\n--- ESTADÍSTIQUES ---");
            // en esta parte mostramos las victorias y derrotas 
            TerminalUtils.log("Victories: " + victorias, "#62f088");
            TerminalUtils.log("Derrotes: " + derrotas, "#f0627c");
            TerminalUtils.log("\nTemps viu: ", "#62cff0");
            TerminalUtils.log("Partides jugades: ", "#62cff0");
            TerminalUtils.log("Temps mitj per partida: ", "#62cff0");
            // Prompt para poder verlo antes de salir
            prompt("\nPrem enter per sortir...");
            break;

        case 3:
            console.clear();
            TerminalUtils.print("\n--- LLUITAR ---\n", "#FF4500", "", true);
            
            if (personatgeActual === null) {
                TerminalUtils.log("Error: Primer has de crear un personatge, tria l'opció '1'!", "#FF0000");
                await TerminalUtils.espera(2000); // Pausa para leer el error
            } else {
                TerminalUtils.log("Buscant rival... Preparat pel combat!", "#FFA500");
                await TerminalUtils.espera(1500); // Pausa  antes de la pelea
                console.clear(); // Limpiamos la pantalla antes de que empiece el combate
                
                //Como ahora el combate tiene pausas por dentro, tambien añadi await al  menuprincipal
                //para que espere a que termine el combate antes de seguir sumando las victorias
                let guanya = await combat(personatgeActual); // Llamamos al combate UNA SOLA VEZ y guardamos el resultado
                
                
                if (guanya) {
                    victorias++;
                } else {
                    derrotas++;
                }
                
                // Pausa para leer el resultado antes de volver al menu
                prompt("\nPrem Intro (Enter) per tornar al menú...");
            }
            break;

        case 0:
            // Salimos del programa 
            TerminalUtils.print("\nSortint del programa... Fins aviat!\n", "#FFA500", "", true); // mensaje ui
            break;

        default:
            // Por si el usuario pulsa una tecla equivocada
            TerminalUtils.print("\nOpció no vàlida. Si us plau, tria una opció disponible.\n", "#FF0000", "", true);//mensaje ui
            break;
    }

} while (opcion != 0); //el bucle se repite hasta que no elija la opcion '0' (salir)
}
main();