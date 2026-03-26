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
        this.tipus = "Arquer Mitjà";
    }
    /**
     * Inflinge daño como un 100% de su poder 
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataquePrincipal(contrincante) {
        // determinar si esquiva o no
        let esquive = Math.random();
        if ((contrincante.velocitat / 100) >= esquive) {
            return "Tir precís! " + contrincante.tipus + " ha esquivat l'atac.";
        }

        // inflinge un 100% de daño a su contrincante
        else { 
            contrincante.vida -= this.poder;
            return "Tir precís! Danya " + this.poder + " a " + contrincante.tipus + ".";
        }
    }
    /**
     * Inflinge daño como un 50% de su poder entre 1 y 3 veces
     * @param {Personatge} contrincante El personaje contra el que se enfrenta
     */
    ataqueSecundario(contrincante) {
        // numero extras de proyectiles
        let proyectilesLanzados = Math.ceil(Math.random() * nMPAS);
        let proyectilesEsquivados = 0;

        for (let i = 0; i < proyectilesLanzados; i++) {
            // determinar si esquiva o no y lo añade al contador de esquives
            let esquive = Math.random();
            if ((contrincante.velocitat / 100) >= esquive) proyectilesEsquivados++;
        }

        let impactos = proyectilesLanzados - proyectilesEsquivados;

        // baja la vida del contrincant un 50% de su poder las veces que haya impactado
        let daño = impactos * this.poder * mDAS;
        contrincante.vida -= daño;

        return "Tir múltiple! " + proyectilesLanzados + " fletxes, " + impactos + " impacten. Danya " + daño + " a " + contrincante.tipus + ".";
    }
}

module.exports.ArquerMitja = ArquerMitja;