const { Personatge } = require("./Personatge");
/**
 * Multiplicador Curación Ataque Principal (mCAP)
 */
const mCAP = 1.5;

class GuerrerNan extends Personatge {
    constructor() {
        super();
        this.vida = 90;
        this.poder = 20;
        this.velocitat = 5;
        this.tipus = "Guerrer Nan";
    }
    /**
     * Se cura un 150% de su poder
     */
    ataquePrincipal() {
        // se cura un 150% de su poder
        this.vida += (this.poder * mCAP);

        // control de vida maxima
        if (this.vida > 90) this.vida = 90;
    }
    /**
     * Inflinge daño como un 100% de su poder
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) >= esquive);


        // inflinge un 100% de su poder al enemigo
        else contrincante.vida -= this.poder;
    }
}

module.exports.GuerrerNan = GuerrerNan;