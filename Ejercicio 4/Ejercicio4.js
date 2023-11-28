// 4. Crea un programa que genere un array con 1000 números aleatorios del 0 al 99.
function generar() {
    const numerosAleatorios = [];
    for (let i = 0; i < 1000; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
  }
  const arrayaleatorios = generar();
  console.log('Array creado: ' + arrayaleatorios);
  console.log("---------------------------APARTADO A--------------------------------------------------");
    // a. Crea una función que calcule la media aritmética.
    function calcularMediaA(array) {
        const suma = array.reduce((total, num) => total + num, 0);
        return suma / array.length;
    }
    let media = calcularMediaA(arrayaleatorios);
    console.log(`Media aritmética: ${media}`);
    console.log("-------------------------APARTADO B----------------------------------------------------");
    // b. Calcula la frecuencia de cada número del 0 al 99. Es decir, si el número 0
    // aparece 80 veces en el array de 1000 posiciones, se guardará un 80 en la
    // posición 0 del nuevo array. Si el número 1 aparece 50 veces se guardará un
    // 50 en la posición 1, etc.
    function calcularFrecuencia(array) {
        const frecuencia = Array(100).fill(0);
        array.forEach(numero => {
          frecuencia[numero]++;
        });
        return frecuencia;
    }
    let frecuencia = calcularFrecuencia(arrayaleatorios);
    console.log(`Frecuencia: ${frecuencia}`);
    console.log("-------------------------APATTADO C----------------------------------------------------");
    // c. Crea una función que ordene el array de menor a mayor sin usar métodos de
    // Javascript.
    function ordenSM(array) {
        for (let i = 0; i < array.length - 1; i++) {
          for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
              const temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
        return array;
    }

    let ordenadosin = ordenSM(arrayaleatorios);
    console.log('Array ordenado sin métodos: ' + ordenadosin);
    console.log("-----------------------APARTADO D------------------------------------------------------");
    // d. Ahora usa una función javascript para realizar la ordenación
    function ordenarSort(array) {
        return array.sort((a, b) => a - b);
    }

    let ordenadocon = ordenarSort(arrayaleatorios);
    console.log('Array ordenado con métodos: ' + ordenadocon);