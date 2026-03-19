/**
 * Classe amb mètodes d'utilitat per realitzar sortida de dades amb millors visualitzacions
 * Podeu trobar més informació sobre en que es basa la implementació a: https://en.wikipedia.org/wiki/ANSI_escape_code#24-bit
 * 
 * @author Diego Muñoz Jorquera
 */
class TerminalUtils {
    /**
     * Aquesta funcio tradueix un color d'hexadecimal a decimal
     * 
     * @param {string} hex el color en hexadecimal
     * @returns {Array<Number>} Array amb els valors decimals rgb del color en hexadecimal
     */
    static #hexRGBToDecimalRGB(hex) {
        let r = hex[1] + hex[2];
        let g = hex[3] + hex[4];
        let b = hex[5] + hex[6];

        return [Number.parseInt(r, 16), Number.parseInt(g, 16), Number.parseInt(b, 16)];
    }

    /**
     * 
     * @param {string} text el text a mostrar
     * @param {string} textColor color de fons en hexadecimal (com a css. e.g. #FF6666)
     * @param {string} fonsColor color de fons en hexadecimal (com a css. e.g. #33AA99)
     * @param {boolean} newLine Si volem o no un salt de linia al final de tot
     */
    static #print(text, textColor = "", fonsColor = "", newLine = true) {
        let color = "";

        if (textColor !== "") {
            let tc = TerminalUtils.#hexRGBToDecimalRGB(textColor);
            color += `\x1b[38;2;${tc[0]};${tc[1]};${tc[2]}m`;
        }

        if (fonsColor !== "") {
            let fc = TerminalUtils.#hexRGBToDecimalRGB(fonsColor);
            color += `\x1b[48;2;${fc[0]};${fc[1]};${fc[2]}m`;
        }

        if (newLine) {
            console.log(color + text + "\x1b[0m");
        } else {
            process.stdout.write(color + text + "\x1b[0m");
        }
    }

    /**
     * Aquest procediment pausa el programa durant un nombre determinat de segons.
     * <b>IMPORTANT: Aquest procediment NOMÉS funciona si s'executa dins una funció asíncrona.</b>
     * Per exemple:
     * 
     * @example // Execució de dues linies amb un temps d'espera:
     * async function main() {
     *   console.log("Hola"); // inici
     *   await TerminalUtils.espera(1000);
     *   console.log("Món!"); // un segon després
     * }
     * 
     * main();
     * 
     * @param {number} segons els segons a esperar
     */
    static async espera(segons) {
        await new Promise(r => setTimeout(r, segons));
    }

    /**
     * Aquest procediment mostra per pantalla <b>fent un salt de linia</b> un text determinat amb
     * un color de text i un color de fons
     *  
     * @param {string} text El text a mostrar
     * @param {string} [textColor] [opcional] El color del text en hexadecimal, per exemple #FFFFFF
     * @param {string} [fonsColor] [opcional] El color del text en hexadecimal, per exemple #FFFFFF
     */
    static log(text, textColor = "", fonsColor = "") {
        this.#print(text, textColor, fonsColor, true);
    }

    /**
     * Aquest procediment mostra per pantalla <b>sense fer un salt de linia</b> un text determinat amb
     * un color de text i un color de fons
     * 
     * @param {string} text El text a mostrar
     * @param {string} [textColor] [opcional] El color del text en hexadecimal, per exemple #FFFFFF
     * @param {string} [fonsColor] [opcional] El color del text en hexadecimal, per exemple #FFFFFF
     */
    static write(text, textColor = "", fonsColor = "") {
        this.#print(text, textColor, fonsColor, false);
    }
}

module.exports.TerminalUtils = TerminalUtils;