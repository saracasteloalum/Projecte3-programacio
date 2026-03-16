const { Personatge } = require("./Personatge");
/**
 * Numero Maximo Proyectiles Ataque Secundario (nMPAS). Siempre minimo 1 proyectil, n incluido.
 */
const nMPAS = 3;
/**
 * Multiplicador Daño Ataque Secundario (mDAS).
 */
const mDAS = 0.5;

class ArquerMitja extends Personatge {
    constructor() {
        super();
        this.vida = 50;
        this.poder = 30;
        this.velocitat = 20;
    }
    /**
     * Inflinge daño como un 100% de su poder 
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataquePrincipal(contrincante) {
        // inflinge un 100% de daño a su contrincante
        contrincante.vida -= this.poder;
    }
    /**
     * Inflinge daño como un 50% de su poder entre 1 y 3 veces
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        let veces = Math.ceil(Math.random() * nMPAS);
        contrincante.vida -= (this.poder * mDAS) * veces;
    }
}

module.exports.ArquerMitja = ArquerMitja;