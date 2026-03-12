const prompt = require("prompt-sync")({sigint: true});

function crearPersonatge () {

}

function menuPersonatge () {
    let op;
    do {
        console.log("---COMBATS AUTOMÀTICS---");
        console.log("1. Paladi humà");
        console.log("2. Mag elf");
        console.log("3. Guerrer nan");
        console.log("4. Arquer mitjà");
        
        op = Number(prompt("Escull el teu personatge: "));
    } while ( op > 4 || op < 1)
    
    return 
}

function menuPrincipal (jugador) {
    let sortir = false;
    let op;
    do {
        console.log("---MENÚ PRINCIPAL---");
        console.log("1. Crear un nou personatge");
        console.log("2. Veure estadístiques");
        console.log("3. Lluitar");
        console.log("0. Sortir")

    op = Number(prompt("Escull una opció: "));

        switch (op) {
            case 1:
                break;
            case 2:
                break;
            case 3: 
                break;
            case 0: 
                console.log("Sortint del programa...");
                sortir = true;
                break;
            default: 
                console.log("Opció no vàlida");
        }    


    } while (!sortir)

}
let jugador = menuPersonatge();
console.log("El personatge que has escollit és " );
menuPrincipal(jugador);