const { Personatge } = require("./Personatge");
/**
 * Multiplicador Curación Ataque Principal (mCAP)
 */
const mCAP = 1.5;

class GuerrerNan extends Personatge {
    #curacions
    constructor() {
        super();
        this.vida = 90;
        this.poder = 20;
        this.velocitat = 5;
        this.tipus = "Guerrer Nan";
        this.curacions = 5;
    }
    set curacions(curacions) {
        this.#curacions = curacions;
    }
    get curacions() {
        return this.#curacions;
    }
    /**
     * Se cura un 150% de su poder
     */
    ataquePrincipal() {
        let vidaAnterior = this.vida;
        let curacionsPrecombat = this.curacions;
        // se cura un 150% de su poder
        if (this.curacions > 0) {
            this.vida += (this.poder * mCAP);
            this.curacions--;
        }
        // control de vida maxima
        if (this.vida > 90) this.vida = 90;
        let vidaActual = this.vida;
        let diferenciaVida = vidaActual - vidaAnterior;
        // missatge de combat
        if (curacionsPrecombat > 0 && diferenciaVida > 0) return "Recuperar alè! El guerrer es cura " + diferenciaVida + " de vida.";
        if (curacionsPrecombat > 0 && diferenciaVida == 0) return "Recuperar alè! El guerrer ja està al màxim vida.";
        if (curacionsPrecombat == 0) return "Recuperar alè! El guerrer s'ha quedat sense curacions.";
    }
    /**
     * Inflinge daño como un 100% de su poder
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) >= esquive) {
            return "Cop de destral! " + contrincante.tipus + " ha esquivat l'atac.";
        }

        // inflinge un 100% de su poder al enemigo
        else {
            contrincante.vida -= this.poder;
            return "Cop de destral! Danya " + this.poder + " a " + contrincante.tipus + ".";
        }
    }
}

module.exports.GuerrerNan = GuerrerNan;