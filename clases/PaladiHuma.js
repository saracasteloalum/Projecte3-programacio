const { Personatge } = require("./Personatge");

class PaladiHuma extends Personatge {
    constructor() {
        super();
        this.vida = 75;
        this.poder = 25;
        this.velocitat = 10;
    }
    ataquePrincipal() {
        // enemigo.vida = 25;

        // puedo llamar a este objeto se llame como se llame con this pero como llamo a otro objeto se llame como se llame 
        // (enemigo o el jugador) se puede una variable que solo pille el nombre y no el objeto entero?


        // como llamo al enemigo y al mismo personaje teniendo en cuenta que este metodo lo utilizan los dos?
        // hago un parametro de entrada? pero como lo uso luego para llamar a cada objeto (personaje)
    }
    ataqueSecundario() {}
}

module.exports.PaladiHuma = PaladiHuma;