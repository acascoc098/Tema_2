//a. Crea una cadena multilínea con comillas dobles.
let multicadena = "@author: acascoc098\nAndrea Castilla Cocera";
console.log(multicadena);
console.log("-----------------------------------------------------------------------------");

// b. Añade a la cadena algún retorno de carro y tabuladores con el símbolo de escape
let multicadena2 = multicadena + "\nVemos retorno de carro \r y \t\t\t\t\t tabulaciones";
console.log(multicadena2);
console.log("-----------------------------------------------------------------------------");

// c. Añade a la cadena el carácter \
let multicadena3 = multicadena2 + "\\";
console.log(multicadena3);
console.log("-----------------------------------------------------------------------------");

// d. Concatena otra cadena con el operador +
let concatenacion = multicadena + "\nDesarrollo de Interfaces"
console.log(concatenacion);
console.log("-----------------------------------------------------------------------------");

// e. Concatena cadenas usando una template string, muestra el valor de varias
let simple = "TEMPLATE\n";
let templeit = simple + `Primera cadena -> ${concatenacion}`;
console.log(templeit);
console.log("-----------------------------------------------------------------------------");

// variables en el template string
console.log("-----------------------------------------------------------------------------");

// f. Separa un texto que tenga varias frases en un array que tenga cada frase por
// separado.
console.log("-----------------------------------------------------------------------------");

// g. Convierte un texto dado a minúsculas.
console.log("-----------------------------------------------------------------------------");

// h. Convierte un texto dado a mayúsculas.
console.log("-----------------------------------------------------------------------------");

// i. Recorre con un bucle el texto caracter a caracter imprimiéndolo.
console.log("-----------------------------------------------------------------------------");

// j. Busca una subcadena en un texto.
console.log("-----------------------------------------------------------------------------");

// k. Extrae en una variable la subcadena desde la posición 3 hasta el final del
// texto.
console.log("-----------------------------------------------------------------------------");

// l. Extrae en una variable la subcadena desde la posición 3 hasta la primera
// ocurrencia de una palabra en el texto.
console.log("-----------------------------------------------------------------------------");

// m. Reemplaza todos los espacios del texto por un -
console.log("-----------------------------------------------------------------------------");

// n. Elimina los espacios antes y después del texto.
console.log("-----------------------------------------------------------------------------");

// o. Crea una cadena que no tenga ningún espacio partiendo de otra dada.
console.log("-----------------------------------------------------------------------------");

// p. Crea una función que invierta una cadena de texto.
console.log("-----------------------------------------------------------------------------");

// q. Usa una expresión regular para comprobar que la cadena tiene números.
console.log("-----------------------------------------------------------------------------");

// r. Usa una expresión regular para comprobar que la cadena termina en punto.
console.log("-----------------------------------------------------------------------------");

// s. Usa una expresión regular para comprobar que la cadena comienza por una
// mayúscula.
console.log("-----------------------------------------------------------------------------");

// t. Usa una expresión regular para comprobar si la cadena contiene un teléfono
// con código internacional.
console.log("-----------------------------------------------------------------------------");
