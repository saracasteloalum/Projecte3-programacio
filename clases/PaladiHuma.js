const { Personatge } = require("./Personatge");
/**
 * Multiplicador Daño Ataque Principal (mDAP)
 */
const mDAP = 0.7;
/**
 * Multiplicador Curación Ataque Principal (mCAP)
 */
const mCAP = 0.25;
/**
 * Multiplicador Daño Ataque Secundario (mDAS)
 */
const mDAS = 0.5;
/**
 * Multiplicador Daño Ataque Secundario 2 (mDAS2)
 */
const mDAS2 = 1.25;

class PaladiHuma extends Personatge {
    constructor() {
        super();
        this.vida = 75;
        this.poder = 25;
        this.velocitat = 10;
        this.tipus = "Paladí Humà"
    }
    /**
     * Inflinge daño como un 70% de su poder y se cura un 25% de su poder (sin superar la vida maxima)
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataquePrincipal(contrincante) {
        // inflinge daño en un 70% de su poder
        contrincante.vida -= (this.poder * mDAP);

        // sube vida un 25% de su poder (no mayor a su vida màxima)
        this.vida += (this.poder * mCAP);

        // control de vida maxima
        if (this.vida > 75) this.vida = 75;
    }
    /**
     * Se auto inflinge un 50% de su poder e inflinge un 125% de su poder
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // baja su propia vida un 50% de su poder
        this.vida -= (this.poder * mDAS);

        // baja la vida del contrincante un 125% de su poder
        contrincante.vida -= (this.poder * mDAS2);
    }
}

module.exports.PaladiHuma = PaladiHuma;