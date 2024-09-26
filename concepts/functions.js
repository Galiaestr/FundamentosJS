//Funciones y Funciones de Flecha

//function nameFunction(params){
//body
//return
//}

//arrow function
//const nameFunction = (params) = {
//body
//return
//}

function sayHello(){
    console.log('Hello');
}
sayHello();

const sayHelloInSpanih = () => console.log('Hola');
sayHelloInSpanish();

function sayHelloTo1(name) {
console.log('Hello ' + name);
}

    sayHelloTo('Batman');
sayHelloTo = name => console.log('Hello ${'name }');
    sayHelloTo('Spiderman');

    function fullName(name, lastName) [
        console.log ('${ name } ${ lastName }');
    ]
    fullName('Bruce', 'Wayne');

    const fullName2 = (name. lastName) => console.log ('${ name ) ${ lastName }');
    fullName2('Clark', 'Kent');

    function duplicateNumber(number) {
        return number * 2;
    }
    let duplicate = duplicateNumber(5);
    console.log(duplicate);

    const halfNumber = number => number / 2;
    let half = halfNumber(10);
    console.log(half);

    // Parametros opcionales
    function greentings(name = 'Invitado'){
        console.log('Hola ${ name)');
    }
    greentings('Batman');
    greentings();

    const greentings2 = (name = 'Invitado') => console.log('Hola ${ name )');
    greentings2('Spiderman');
    greentings2();