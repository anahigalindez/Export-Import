// Se exporta y se crea la clase Persona
export class Persona {

    /*  
    Este es constructor de la clase Persona. 
    Tiene dos parametros: nombre y edad
    Cada vez que se cree una nueva instancia, le va a pedir esos parametros.
    */

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Este método hace que se muestren los datos de la instancia de Persona.
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}. Edad: ${this.edad}`);
    }
}
