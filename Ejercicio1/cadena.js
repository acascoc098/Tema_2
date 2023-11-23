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
// variables en el template string
let simple = `TEMPLATE\n`;
let templeit = simple + `Primera cadena -> ${concatenacion}`;
console.log(templeit);
console.log("-----------------------------------------------------------------------------");

// f. Separa un texto que tenga varias frases en un array que tenga cada frase por
// separado.
let texto = ["En un lugar","de la mancha,","de cuyo normbre","no quieroa cordarme"];
console.log(texto);
console.log("-----------------------------------------------------------------------------");

// g. Convierte un texto dado a minúsculas.
let texto2 = "Tipo string. Secuencia de caracteres de 16 bits en Unicode.";
console.log(texto2.toLowerCase());
console.log("-----------------------------------------------------------------------------");

// h. Convierte un texto dado a mayúsculas.
console.log(texto2.toUpperCase());
console.log("-----------------------------------------------------------------------------");

// i. Recorre con un bucle el texto caracter a caracter imprimiéndolo.
for(let i=0; i < texto2.length; i++) {
    console.log(texto2[i]);
}
console.log("-----------------------------------------------------------------------------");

// j. Busca una subcadena en un texto.
let subcadena = texto2.substring(2,6);
const esta = texto2.includes(subcadena);
console.log(`¿Está la subcadena ${subcadena} en el texto? ${esta}`)
console.log("-----------------------------------------------------------------------------");

// k. Extrae en una variable la subcadena desde la posición 3 hasta el final del
// texto.
let subtexto = texto2.substring(3,texto2.length);
console.log(subtexto);
console.log("-----------------------------------------------------------------------------");

// l. Extrae en una variable la subcadena desde la posición 3 hasta la primera
// ocurrencia de una palabra en el texto.
let ocur = texto2.indexOf("bits");
let subtexto2 = texto2.substring(3,ocur);
console.log(subtexto2);
console.log("-----------------------------------------------------------------------------");

// m. Reemplaza todos los espacios del texto por un -
console.log(texto2.replaceAll(" ","-"));
console.log("-----------------------------------------------------------------------------");

// n. Elimina los espacios antes y después del texto.
let textoespacios = '                      Tipo string. Secuencia de caracteres de 16 bits en Unicode.                                     ';
console.log(textoespacios);
console.log(textoespacios.trim());
console.log("-----------------------------------------------------------------------------");

// o. Crea una cadena que no tenga ningún espacio partiendo de otra dada.
let cadenasin = texto2.replaceAll(" ",".");
console.log(cadenasin);
console.log("-----------------------------------------------------------------------------");

// p. Crea una función que invierta una cadena de texto.
let cadena = "alrevés";
let cadenareves = [...cadena].reverse().join('');
console.log(cadenareves);
console.log("-----------------------------------------------------------------------------");

// q. Usa una expresión regular para comprobar que la cadena tiene números.
let regex = /\w/;
let cadenanum = "Cadena12"
const tienennum = regex.test(cadenanum);
let cadenanum2 = "CadenaSin"
const tienennum2 = regex.test(cadenanum2);
console.log(tienennum);
console.log(tienennum2);
console.log("-----------------------------------------------------------------------------");

// r. Usa una expresión regular para comprobar que la cadena termina en punto.
console.log("-----------------------------------------------------------------------------");

// s. Usa una expresión regular para comprobar que la cadena comienza por una
// mayúscula.
console.log("-----------------------------------------------------------------------------");

// t. Usa una expresión regular para comprobar si la cadena contiene un teléfono
// con código internacional.
console.log("-----------------------------------------------------------------------------");
