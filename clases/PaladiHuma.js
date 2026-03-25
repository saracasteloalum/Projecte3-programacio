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
        this.tipus = "Paladí Humà";
    }
    /**
     * Inflinge daño como un 70% de su poder y se cura un 25% de su poder (sin superar la vida maxima)
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataquePrincipal(contrincante) {
        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) >= esquive) {
            this.vida += (this.poder * mCAP);
            if (this.vida > 75) this.vida = 75;
            return "Atac diví! " + contrincante.tipus + " ha esquivat. El paladí es cura " + (this.poder * mCAP) + ".";
        }

        // inflinge daño en un 70% de su poder
        else {
            contrincante.vida -= (this.poder * mDAP);
        
            // sube vida un 25% de su poder (no mayor a su vida màxima)
            this.vida += (this.poder * mCAP);

            // control de vida maxima
            if (this.vida > 75) this.vida = 75;
            return "Atac diví! Danya " + (this.poder * mDAP) + " a " + contrincante.tipus + " i es cura " + (this.poder * mCAP) + ".";
        }
    }
    /**
     * Se auto inflinge un 50% de su poder e inflinge un 125% de su poder
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // baja su propia vida un 50% de su poder
        this.vida -= (this.poder * mDAS);

        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) >= esquive) {
            return "Ultim recurs! El paladí perd " + (this.poder * mDAS) + ". " + contrincante.tipus + " ha esquivat.";
        }
        // baja la vida del contrincante un 125% de su poder
        else { 
            contrincante.vida -= (this.poder * mDAS2);
            return "Últim recurs! El paladí perd " + (this.poder * mDAS) + " i danya " + (this.poder * mDAS2) + " a " + contrincante.tipus + ".";
        
        }
    }
}

module.exports.PaladiHuma = PaladiHuma;