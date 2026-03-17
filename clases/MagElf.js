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
        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) > esquive);

        // baja la vida del contrincante un 100% del poder
        else contrincante.vida -= this.poder;
    }
    /**
     * Inflinge daño como un 20% de su poder entre 3 y 6 veces
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // numero extras de proyectiles
        let veces = Math.floor(Math.random() * naPAS);
        let proyectilesLanzados = nmPAS + veces;
        let proyectilesEsquivados = 0;

        for (i = 0; i < proyectilesLanzados; i++) {
            // determinar si esquiva o no y lo añade al contador de esquives
            let esquive = Math.random();
            if ((contrincante.velocitat / 100) >= esquive) proyectilesEsquivados++;
        }

        // baja la vida del contrincante un 20% de su poder las veces que haya impactado
        contrincante.vida -= (proyectilesLanzados - proyectilesEsquivados) * this.poder * mDAS;
    }
}

module.exports.MagElf = MagElf;