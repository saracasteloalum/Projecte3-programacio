const prompt = require("prompt-sync")({sigint: true});

// ---- Menu Principal------

// Variables globales para guardar el estado de la partida
let personajeActual = null; // Al principio no tenemos personaje part1
let victorias = 0;          // estadisticas iniciales 
let derrotas = 0;
let opcion = "";

// utilizamos un bucle-while porque queremos que  el menu se muestre al menos una vez 
do {

    console.log("\n=== COMBATS AUTOMÀTICS ===");
    console.log("a. Crear nou personatge");
    console.log("b. Veure estadístiques");
    console.log("c. Lluitar");
    console.log("d. Sortir");


    //usamos el metodo .toLowerCase para evitar las mayusculas que pueda poner el jugar y que se pueda leer correctamente
    opcion = prompt("Escull una opción: ").toLowerCase();

    // 
    switch (opcion) {
        case "a":
            console.log("\n--- CREAR PERSONATGE ---");
            // aqui llamaremos a una función para crear el personaje (lo haremos más adelante)
            // por ejem:  personajeActual = crearNuevoPersonaje(); parte 1

            // El enunciado dice que al crear uno nuevo, se reinician las estadisticas
            victorias = 0;
            derrotas = 0;
            console.log("Personatge creat amb exit. Estadistiques reiniciades.");
            break;

        case "b":
            console.log("\n--- ESTADISTIQUES ---");
            // en esta parte mostramos las victorias y derrotas 
            console.log("Victories: " + victorias);
            console.log("Derrotes: " + derrotas);
            break;

        case "c":
            console.log("\n--- LLUITAR ---");
            // no puedemos luchar si no hemos creado un personaje primero
            if (personajeActual === null) {
                console.log("Error: Primer has de crear un personatge elige la ocpion 'a'!");
            } else {
                console.log("Buscant rival... Preparat pel combat!");
                // aqui llamaremos a una función creada para el combate 
                // por ejem : iniciarCombat();
            }
            break;

        case "d":
            // Salimos del programa 
            console.log("\nSortint del programa... Fins aviat!");
            break;

        default:
            // Por si el usuario pulsa una tecla equivocada
            console.log("\nOpció no valida. Si us plau, escull a, b, c o d.");
            break;
    }

}while(opcion !== "d"); //el bucle se repite hasta que no eleja la opcion 'd' (salir)