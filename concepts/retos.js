function wrapping(gifts) {
    const envueltos = [];
    for(let gift of gifts){
        let tapa = `*`.repeat(gift.lenght + 2);
        let g = `${ tapa }\n*${gift }*\n${ tapa }`;
        envueltos.push(g)
    }
    return envueltos;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[1])

function createCubo(size) {
    const space = ' ';
    const faceA = '/\\';
    const backA = '_\\';
    const faceB = '\\/';
    const backB = '_/';
    let cuboA = '';
    for(let i = 0; i < size; i++){
        let line = space.repeat(i);
        line += faceA.repeat(size - i);
        line += backA.repeat(size);
        cuboA = line + '\n' + cuboA;
    }
    let cuboB = '';
    for(let i = 0; i < size; i++){
        let line = space.repeat(size - i - 1);
        line += faceB.repeat(i + 1);
        line += backB.repeat(size);
        cuboB = line + '\n' + cuboB;
    }
    console.log(cuboA + cuboB);
    return ''
}

const cubo = createCubo(3)
console.log(cubo)