const { Personatge } = require("./Personatge");
/**
 * Numero Minimo Proyectiles Ataque Secundario (nmPAS). Numero asegurado de proyectiles.
 */
const nmPAS = 3;
/**
 * Numero Adicionales Proyectiles Ataque Secundario (naPAS). 0 incluido, n excluido.
 */
const naPAS = 4;
/**
 * Multiplicador Daño Ataque Secundario (mDAS)
 */
const mDAS = 0.2;

class MagElf extends Personatge {
    constructor() {
        super();
        this.vida = 40;
        this.poder = 45;
        this.velocitat = 15;
        this.tipus = "Mag Elf";
    }
    /**
     * Inflinge daño como un 100% de su poder
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataquePrincipal(contrincante) {
        // baja la vida del contrincante un 100% del poder
        contrincante.vida -= this.poder;
    }
    /**
     * Inflinge daño como un 20% de su poder entre 3 y 6 veces
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // baja la vida del contrincante un 20% de su poder entre 3 y 6 veces
        let veces = Math.floor(Math.random() * naPAS);
        contrincante.vida -= (nmPAS + veces) * this.poder * mDAS;

        // se puede hacer varios ataques por individual y a ver cuantos esquiva pero no es necesario
    }
}

module.exports.MagElf = MagElf;