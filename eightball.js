const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eigthBall = () => {
    const question = prompt('Pregunta:');
    const random = Math.floor(Math.random() * 8);
    const options = [
        'si',
        'no',
        'talvez',
        'no se',
        'no preguntes',
        'chance',
        'neh',
        'ei',
    ]
    h1.innerText = options[random];
}

main.addEventListener('click', eigthBall);