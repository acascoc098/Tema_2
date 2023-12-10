//6. Crea una función que busque todas las ocurrencias de una palabra en un texto dado. La función retorna un array con las posiciones encontradas.

function buscarOcurrencias(texto, palabra) {
    const regex = new RegExp(palabra, 'gi');
    const posiciones = [];
    let match;
    
    while ((match = regex.exec(texto)) !== null) {
        posiciones.push(match.index);
    }
    
    return posiciones;
}

// Ejemplo de uso:
const textoEjemplo = "Vamos a ver cuantas veces se repite la palabra letras en esta frase llena de letras y más letras";
const palabraABuscar = "letras";
const posicionesEncontradas = buscarOcurrencias(textoEjemplo, palabraABuscar);

console.log(`Las posiciones de la palabra "${palabraABuscar}" en el texto son: ${posicionesEncontradas.join(', ')}`);
