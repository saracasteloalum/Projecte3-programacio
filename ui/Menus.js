
const { TerminalUtils } = require("../terminalUtils/TerminalUtils.js");

//menu para elegir un personaje

class Menus {
    static mostrarMenuPersonatges() {
        console.clear();
        TerminalUtils.print("\n╔════════════════════════════╗", "#00FFFF", "", true);
        TerminalUtils.print("║  ESCULL EL TEU PERSONATGE  ║", "#00FFFF", "", true);
        TerminalUtils.print("╚════════════════════════════╝\n", "#00FFFF", "", true);

        TerminalUtils.print("1. Paladí humà", "#FFD700", "", true); // Amarillo
        TerminalUtils.print("2. Mag elf", "#8A2BE2", "", true);     // Morado
        TerminalUtils.print("3. Guerrer nan", "#FF4500", "", true);  // Naranja
        TerminalUtils.print("4. Arquer mitjà", "#32CD32", "", true); // Verde

        TerminalUtils.print("\n══════════════════════════════\n", "#00FFFF", "", true);

    }

    //FUNCIÓN PARA EL MENÚ PRINCIPAL
    static mostrarMenuPrincipal() {
        console.clear();
        TerminalUtils.print("\n╔═══════════════════════════╗", "#FF1493", "", true); // Rosa fuerte
        TerminalUtils.print("║    COMBATS AUTOMÀTICS     ║", "#FF1493", "", true);
        TerminalUtils.print("╚═══════════════════════════╝\n", "#FF1493", "", true);

        TerminalUtils.print("1. Crear nou personatge", "#FFFFFF", "", true);
        TerminalUtils.print("2. Veure estadístiques", "#FFFFFF", "", true);
        TerminalUtils.print("3. Lluitar", "#FFFFFF", "", true);
        TerminalUtils.print("0. Sortir", "#FFFFFF", "", true); // Rojo antes #FF0000

        TerminalUtils.print("\n══════════════════════════════\n", "#FF1493", "", true);
    }

    static mostrarLluitar() {
        TerminalUtils.print("\n╔═════════════╗", "#FF4500", "", true);
        TerminalUtils.print("\║   LLUITAR   ║", "#FF4500", "", true);
        TerminalUtils.print("\╚═════════════╝\n", "#FF4500", "", true);
    }

    static mostrarEstadistiques() {
        console.log("\n╔═══════════════════╗");
        console.log("║   ESTADÍSTIQUES   ║");
        console.log("╚═══════════════════╝\n");
    }
}

module.exports.Menus = Menus;