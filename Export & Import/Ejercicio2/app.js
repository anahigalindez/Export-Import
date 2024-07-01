// Importa la clase Persona desde persona.js
import { Persona } from './persona.js';

// Se crean instancias de Persona.
const persona1 = new Persona('Octavio', 21);
const persona2 = new Persona('Sebastian', 25);
const persona3 = new Persona('Marilyn', 37)

// Se ejecuta el método para mostrar la información de las instancias de Persona

persona1.mostrarInformacion(); // Muestra "Nombre: Octavio, Edad: 21" en la consola
persona2.mostrarInformacion(); // Muestra "Nombre: Sebastian, Edad: 25" en la consola
persona3.mostrarInformacion(); // Muestra "Nombre: Marilyn, Edad: 37" en la consola
