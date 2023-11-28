// a. Crea un array "datos" vacío con un literal.
let arrvacio =  [];
console.log("-----------------------------------------------------------------------------");
// b. Añade a "datos" los números del 1 al 50 con un bucle for.
let datos = [];
for (let i = 0; i <= 50; i++) {
    datos.push(i);   
}
console.log(datos);
console.log("-----------------------------------------------------------------------------");
// c. Elimina los elementos del 25 al 50 asignando un nuevo tamaño a la
// propiedad length
datos.length = 25;
console.log(datos);
console.log("-----------------------------------------------------------------------------");
// d. Usa el operador spread para hacer una copia del array anterior.
let copiadatos = {...datos};
console.log(copiadatos);
console.log("-----------------------------------------------------------------------------");
// e. Crea un array de tamaño 50 con el constructor Array.
let arr50 = new Array(50);
console.log("-----------------------------------------------------------------------------");
// f. Copia el array anterior a otro con la factoría from.
let coparr = Array.from(arr50);
console.log("-----------------------------------------------------------------------------");
// g. Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa
// cada celda con el valor i*j.
let arram = [];
for (let i = 0; i < 10; i++) {
    arram[i] = [];
    for (let j = 0; j < 10; j++) {
      arram[i][j] = i * j;
    }
}
console.log(arram);
console.log("-----------------------------------------------------------------------------");
// h. Crea un array con la factoría of con los números del 1 al 5. Después añade
// un elemento en la posición 10 y otro en la 50. Recorre el array con for
// imprimiendo valores y después con forEach. ¿Cuál es la diferencia? ¿Cuál es
// el tamaño del array?.
let arrof = Array.of(1,2,3,4,5);
arrof[9] = 6;
arrof[49] = 7;
for (let i = 0; i < arrof.length; i++) {
    const element = arrof[i];
    console.log(element);
}
console.log("~~~~~~~~~~~~");
arrof.forEach(element => {
    console.log(element);
});
console.log('\nLongitud del array: '+arrof.length);
console.log("-----------------------------------------------------------------------------");
// i. Elimina dos elementos con delete.
delete arrof[9];
delete arrof[49];
console.log(arrof);
console.log("-----------------------------------------------------------------------------");
// j. Calcula el producto de todos los números del array "datos" con forEach.
let producto = 1;
datos.forEach(element => {
    producto *= element;
});
console.log(producto);
console.log("-----------------------------------------------------------------------------");
// k. Cada elemento x del array datos debe cambiarse por x*x. Usa forEach
datos.forEach((element,pos,data) => {
    data[pos] = element*element;
});
console.log(datos);
console.log("-----------------------------------------------------------------------------");
// l. Crea un nuevo array con map recorriendo cada elemento x de "datos", donde
// cada elemento sea un string "El valor es: x". Usa template string.
let datosstring = datos.map(element => `El valor es: ${element}`);
console.log(datosstring);
console.log("-----------------------------------------------------------------------------");
// m. Crea un array nuevo mediante map que incremente cada elemento de
// "datos" en 5 unidades.
let datosincre = datos.map(element => element+5);
console.log(datosincre);
console.log("-----------------------------------------------------------------------------");
// n. Mediante filter quédate con los números impares en un nuevo array impares.
let datosimpares = datos.filter(element => element%2 != 0);
console.log(datosimpares);
console.log("-----------------------------------------------------------------------------");
// o. Usa find para buscar el número 13.
let numetrece = datos.find(element => element == 13);
console.log('¿Encontrado el número 13? ' + (numetrece == undefined? 'false' : 'true'));
console.log("-----------------------------------------------------------------------------");
// p. Usa every para comprobar si todos los números son positivos.
let positivos = datos.every(element => element >0);
console.log(positivos);
console.log("-----------------------------------------------------------------------------");
// q. Calcula la sumatoria del array datos mediante reduce.
let sum = datos.reduce((suma,element) => suma + element, 0);
console.log(sum);
console.log("-----------------------------------------------------------------------------");
// r. Calcula el valor más pequeño del array mediante reduce.
let min = datos.reduce((mini,element) => Math.min(mini,element), Infinity);
console.log(min);
console.log("-----------------------------------------------------------------------------");
// s. Usa flat para aplanar el array multidimensional que creaste anteriormente.
let arramaplanado = arram.flat(Infinity);
console.log(arramaplanado);
console.log("-----------------------------------------------------------------------------");
// t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana
// los arrays". Separa mediante split las distintas frases. Después mediante
// map quita los espacios sobrantes (trim). A continuación usa flatMap para
// extraer todas las palabras de cada frase en un único array.
let cadenafm = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays";
const frases = cadenafm.split('.').map(frase => frase.trim()).flatMap(frase => frase.split(' '));
console.log(frases);
console.log("-----------------------------------------------------------------------------");
// u. Crea el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatena los arrays
// a y b con concat. Después con operador spread. Crea una variable const
// cola. Usa unshift y shift para añadir y quitar elementos. Dado el array
// resultante de la concatenación de a y b, obten el subarray desde el índice 2
// al penúltimo elemento (slice). Usa splice para quitar los 2 últimos elementos
// de un array.
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

let concat = a.concat(b);
console.log(concat);
let spread = [...a, ...b];
console.log(spread);
const cola = [];
cola.unshift(5);
cola.unshift(4);
cola.unshift(3);
console.log(cola);
cola.shift();
cola.shift();
console.log(cola);
let subspread = spread.slice(2,-1);
console.log(subspread);
concat.splice(-2);
console.log(concat);
console.log("-----------------------------------------------------------------------------");
// v. Rellena con fill un array de 100 elementos con -1
let fillrelleno = new Array(100).fill(-1);
console.log(fillrelleno);
console.log("-----------------------------------------------------------------------------");
// w. Crea un array de cadenas. Busca con indexOf una cadena.
let arrayCadenas = ['perro', 'gato', 'serpiente', 'kiwi', 'rana'];

let pos = arrayCadenas.indexOf('kiwi');
console.log(pos);
console.log("-----------------------------------------------------------------------------");
// x. Comprueba si la cadena "hola" está dentro del array anterior.
let conHola = arrayCadenas.includes("hola");
console.log(conHola);
console.log("-----------------------------------------------------------------------------");
// y. Ordena la lista de cadenas anterior de forma alfabética con sort.
arrayCadenas.sort();
console.log(arrayCadenas);
console.log("-----------------------------------------------------------------------------");
// z. Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios
// entre 0 y 100. Después ordena con sort de menor a mayor. Cambia y ordena
// de mayor a menor.
let arrvac50 = new Array(50);
arrvac50.forEach((element,i,arr) => {
    arr[i] = element+Math.floor(Math.random()*101);
});
console.log(arrvac50);
arrvac50.sort((x,y) => x - y);
console.log(arrvac50);
arrvac50.sort((x,y) => y - x);
console.log("-----------------------------------------------------------------------------");
// aa. Usa reverse para invertir el array anterior.
arrvac50.reverse();
console.log(arrvac50);
console.log("-----------------------------------------------------------------------------");