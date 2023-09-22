let button = document.getElementById('sortear');
let vidasRestantes = 5;
let resultado = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let vidasElement = document.getElementById('vidas');
let numero = parseInt(document.getElementById('min').value);
let resultadoFinal = document.getElementById('numero');
let tudo = document.getElementById('tudo');
let tenteNovamente = document.getElementById('tenteNovamente');
let titulo = document.getElementById('titulo');

button.addEventListener('click', function() {
    if (vidasRestantes <= 0 || isNaN(resultado)) {
        return;
    }

    let numero = parseInt(document.getElementById('min').value);

    if (min.value < 1 || min.value > 100) {
        alert("Informe um número válido");
        return false;
    }

    if (isNaN(resultado)) {
        resultado = 'Informe um número'
    }

    if (numero > resultado) {
        document.querySelector('#resultado').innerHTML = `Menor que ${numero}`
    } else if (numero < resultado) {
        document.querySelector('#resultado').innerHTML = `Maior que ${numero}`
    } else if (numero == resultado) {
        titulo.textContent = "Você acertou!";
        resultadoFinal.textContent = "Você acertou em " + (5 - vidasRestantes + 1) + " chances." + " O número era " + resultado + ".";
        tudo.style.display = 'none';
        tenteNovamente.style.display = 'block';
        vidasElement.style.display = 'none';
        instrucoes.style.display = 'none';
        return;
    }

    document.getElementById('resultado2').textContent = resultado;
    vidas();
});

function vidas() {
    if (numero != resultado && vidasRestantes > 0) {
        vidasRestantes--;
        atualizarVidas();
    }

    if (vidasRestantes >= 0) {
        instrucoes.textContent = "Você errou, e ainda tem " + vidasRestantes + " vida(s) restante(s).";
    }

    if (vidasRestantes === 0 && numero != resultado) {
        titulo.textContent = "Fim de Jogo!";
        resultadoFinal.textContent = "Suas vidas acabaram. O número era " + resultado + ".";
        tudo.style.display = 'none';
        tenteNovamente.style.display = 'block';
        vidasElement.style.display = 'none';
        instrucoes.style.display = 'none';
    }
}

function atualizarVidas() {
    vidasElement.innerHTML = 'Vidas: ';

    for (let i = 0; i < vidasRestantes; i++) {
        const vidaElement = document.createElement('span');
        vidaElement.className = 'vida';
        vidaElement.textContent = '❤️';
        vidasElement.appendChild(vidaElement);
    }

    for (let i = 0; i < 5 - vidasRestantes; i++) {
        const vidaVaziaElement = document.createElement('span');
        vidaVaziaElement.className = 'vida-vazia';
        vidaVaziaElement.textContent = '🖤';
        vidasElement.appendChild(vidaVaziaElement);
    }
}
