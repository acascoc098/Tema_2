/*10. Implementa un script que cuente el número de vocales y consonantes en una
cadena.
*/

function contarVocalesConsonantes(cadena) {
    cadena = cadena.toLowerCase(); // Convertir la cadena a minúsculas para simplificar la comparación

    let vocales = 0;
    let consonantes = 0;
    const letras = cadena.match(/[a-z]/gi); // Obtener solo letras de la cadena

    if (letras !== null) {
        for (let i = 0; i < letras.length; i++) {
            if ('aeiou'.indexOf(letras[i]) !== -1) {
                vocales++;
            } else {
                consonantes++;
            }
        }
    }

    return { vocales, consonantes };
}

// Ejemplo de uso:
const texto = "Hola, esto es un ejemplo de conteo de vocales y consonantes.";
const resultado = contarVocalesConsonantes(texto);

console.log(`Número de vocales: ${resultado.vocales}`);
console.log(`Número de consonantes: ${resultado.consonantes}`);
