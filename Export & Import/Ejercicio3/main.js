// Importa la clase Calculadora desde calculadora.js
import Calculadora from "./calculadora.js";

// Esta función ejecuta la calculadora
function ejecutarCalculadora(numero1, numero2) {

    // Crea una instancia de Calculadora
    const calculadora = new Calculadora();

    // Utilizando los metodos de la clase Calculadora, calcula el resultado
    const resultadoMultiplicacion = calculadora.multiplicar(numero1, numero2);
    const resultadoDivision = calculadora.dividir(numero1, numero2);

    // Imprime los resultados en la consola
    console.log(`La multiplicación de ${numero1} y ${numero2} es:`, resultadoMultiplicacion);
    console.log(`La división de ${numero1} entre ${numero2} es:`, resultadoDivision);

}

// Llama a la función ejecutarCalculadora.
ejecutarCalculadora(6, 3);