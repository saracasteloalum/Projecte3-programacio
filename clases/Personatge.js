class Personatge {
    #vida
    #poder
    #velocitat
    tipus
    constructor() {}
    /**
     * @param {Number} novaVida La nueva vida que tendra el personaje, numero i positiva o igual a 0 si muere.
     */
    set vida(novaVida) {
        if ((!isNaN(novaVida)) && novaVida >= 0) this.#vida = novaVida;
        if (this.#vida < 0) this.#vida = 0;
    }
    /**
     * @returns {Number} La vida actual del personaje
     */
    get vida() {
        return this.#vida;
    }
    /**
     * @param {Number} nouPoder El poder que se le asignara al personaje, numero positivo
     */
    set poder(nouPoder) {
        if ((!isNaN(nouPoder)) && nouPoder > 0) this.#poder = nouPoder;
    }
    /**
     * @returns {Number} El poder del personaje
     */
    get poder() {
        return this.#poder;
    }
    /**
     * @param {Number} novaVelocitat La velocidad que se le asigna al personaje, numero positivo
     */
    set velocitat(novaVelocitat) {
        if ((!isNaN(novaVelocitat)) && novaVelocitat > 0) this.#velocitat = novaVelocitat;
    }
    /**
     * @returns {Number} La velocidad del personaje
     */
    get velocitat() {
        return this.#velocitat;
    }
    /**
     * El primer ataque que puede hacer cada personaje
     */
    ataquePrincipal() {}
    /**
     * El segundo ataque que puede hacer cada personaje
     */
    ataqueSecundario() {}
}

module.exports.Personatge = Personatge;