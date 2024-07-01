
// Se exporta por defecto la clase Calculadora.
export default class Calculadora {

    // Esta función multiplica dos valores. 

    multiplicar(numero1, numero2) {    

    // Devuelve la multiplicación de los dos valores.
    return numero1 * numero2;         
    }

    dividir (numero1,numero2) {  
        if (numero2 == 0) {

            // Si numero2 es cero, se lanza un error con el mensaje "No se puede dividir por cero".
            throw new Error("No se puede dividir por cero");
        }

        // Devuelve la división de los dos valores.
        return numero1 / numero2;  
    };

}



