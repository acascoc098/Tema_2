//a. Desestructura día, mes y año e imprime la fecha dado el array ['06', 'Octubre','2021'];
const arrf = ['06', 'Octubre','2021'];
let dia = arrf[0];
let mes = arrf[1];
let anio = arrf[2];
console.log('Día '+dia+' del mes de '+mes+' de '+anio);
console.log("-----------------------------------------------------------------------------");
//b. Dado un array de números, desestructura los números en posiciones impares.
const arrnums = [1,2,3,4,5,6,7,8,9,0];
let [a,,b,,c,,d,,e,] = arrnums;
console.log(a,b,c,d,e);
console.log("-----------------------------------------------------------------------------");
//c. Desestructura el primer número, el segundo y el resto en otra variable. (Utilizo en array de arriba)
let [f,g] = arrnums;
console.log(f,g);
let [,,...h] = arrnums;
console.log(h);
console.log("-----------------------------------------------------------------------------");
//d. Desestructura nombre, apellidos y teléfono del siguiente objeto.
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'};
let nom = person.nombre;
console.log(nom);
let ape = person.apellidos;
console.log(ape);
let tel = person.telefono;
console.log(tel);
console.log("-----------------------------------------------------------------------------");
//e. Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave,valor por separado.
for(const propertie of Object.entries(person)) { 
    console.log(propertie); 
}

for(const [llave,valor] of Object.entries(person)){
    console.log(`${llave} : ${valor}`);
}
console.log("-----------------------------------------------------------------------------");
//f. Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1,y1, x2, y2
let [{x: x1, y: y1},{x: x2, y: y2}] = [{x: 1, y: 2},{x: 3, y: 4}];
console.log(`${x1},${y1} \n${x2},${y2}`);
console.log("-----------------------------------------------------------------------------");
//g. Crea una función a la que le pasas un único objeto como parámetro con 5
//propiedades cualquiera incluida la propiedad nombre y apellidos.
//Desestructura en la función la propiedad nombre y apellidos e imprime el nombre completo.
function desectAlumn(alum) {
    let {nombre,apellidos} = alum;
    console.log(`${nombre} ${apellidos}`);
}
const alumno = {nombre: 'Andrea', apellidos: 'Castilla', telefono: '+34666554433', edad: 20, provincia: 'Jaén'};
desectAlumn(alumno);
console.log("-----------------------------------------------------------------------------");
//h. Dados dos objetos, combínalos en uno solo utilizando el operador spread. Después elimina alguna de las propiedades.
let obj1 = { parm: 'Hola,', parm1: 'qué'};
let obj2 = { parm2: 'tal', parm3: 'estás'};
let objetofinal = {...obj1,...obj2};
for(const [llave,valor] of Object.entries(objetofinal)){
    console.log(`${llave} : ${valor}`);
}
console.log("-----------------------------------------------------------------------------");
//i. Crea una función que retorna un array con 3 valores. Usa la función y desestructura los valores.
function incog(v1,v2,v3){
    return [v1,v2,v3]
}
let [z,v,m] = incog(2,3,1);
console.log(z,v,m);
console.log("-----------------------------------------------------------------------------");
//j. Realiza una clonación profunda de un objeto que contiene otros objetos o arrays como propiedades.
const objetoOriginal = {
    nombre: 'Andrea',
    numeros: [1, 2, 3],
    info: {
      ciudad: 'Cazorla',
      codigoPostal: 23470
    }
};
console.log("-----------------------------------------------------------------------------");
