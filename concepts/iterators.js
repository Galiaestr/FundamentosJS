
//High Order Functions
//Funciones de Orden Superior
//Son funciones que reciben funciones como parametros

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const operation = (a, b, callback) => {
    const result = callback(a, b);
    console.log('El resultado es: ' + result);
}

operation(12, 5, suma);
operation(12, 5, resta);
operation(12, 5, (a, b) => a * b);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];

cars.forEach(car => {console.log(car) });

filtrados = cars.filter(car => car.includes ('o')); 
console.log(filtrados);

filtrados = cars.filter(car => car.startsWith ('a'));
console.log(filtrados)

filtrados = cars.filter(car => car.endsWith ('u'));
console.log(filtrados)

//regresar los  que comiencen con A
//regresar los que terminen con la letra U
//regresar los que tengan menos de 5 letras
//------------------------------------------------------------------------------------------------------------------------------------------------
//metodo map
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const reves = cars.map(car => car.split('').reverse().join(''))
console.log(reves);

    //return envueltos;
const reves = cars.map(car => car.split('').reverse().join(''))
console.log(reves);

function wrapping(gifts) {}
    return gifts.map(gift => {
        let tapa = '*'.repeat(gift.length + 2);
        let g = '${tapa }\n*${ gift }*\n${ tapa }';
        return g;
    })
}
const carsEnvueltos = wrapping (cars);
carsEnvueltos.forEach(car => console.log(car));

//forEach, map, filter
//reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a, b) => a * b);
console.log(factorial);

//   
const ages = [23, 14, 37, 19, 18, 22, 27];
const olders = ages.every(age => age >= 18);
const youngers = ages.every(age => age < 18);
console.log(olders);
console.log(youngers);
//siome regresa verdadero con uno que cumple
const olders2 = ages.some(age => age >= 18);
const youngers2 = ages.some(age => age < 18);
console.log(olders2);
console.log(youngers2);

//Ejercicios
/**
 * Crear un array con elementos del 1 al 10
 * Crear uno nuevo con los cuadrados (map)
 * Crear uno nuevo con los cubos (map)
 * Crear uno nuevo con las mitades (map)
 * 
 * Crear uno nuevo con los pares (filter)
 * Crear uno nuevo con los impares (filter)
 * Crear uno nuevo con valores entre 3 y 8 (filter)
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cuadrados = numeros.map(numero => numero * numero);

const cubos = numeros.map(numero => numero ** 3);

const mitades = numeros.map(numero => numero / 2);

const pares = numeros.filter(numero => numero % 2 === 0);

const impares = numeros.filter(numero => numero % 2 !== 0);

const entreTresYOcho = numeros.filter(numero => numero >= 3 && numero <= 8);

console.log("Cuadrados:", cuadrados);
console.log("Cubos:", cubos);
console.log("Mitades:", mitades);
console.log("Pares:", pares);
console.log("Impares:", impares); 
console.log("Entre 3 y 8:", entreTresYOcho);