//5. Crea una función que calcule el factorial de un número usando un bucle.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

const numero = 5;
const resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
console.log("acascoc098 Andrea Castilla Cocera")
