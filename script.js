const rolos = document.querySelectorAll('.rolo');
const botaoGirar = document.getElementById('girar');
const apostaInput = document.getElementById('aposta');
const creditosElement = document.getElementById('creditos');
const resultadoElement = document.getElementById('resultado');

let creditos = 100;
const simbolos = ['simbolo1', 'simbolo2', 'simbolo3', 'simbolo4', 'simbolo5'];
const combinacoesVencedoras = [
    ['simbolo1', 'simbolo1', 'simbolo1'],
    ['simbolo2', 'simbolo2', 'simbolo2'],
    ['simbolo3', 'simbolo3', 'simbolo3']
];

function girarRolos() {
    const simbolosRodados = [];

    rolos.forEach(rolo => {
        const img = rolo.querySelector('img');
        const randomIndex = Math.floor(Math.random() * simbolos.length);
        const simbolo = simbolos[randomIndex];

        img.classList.add('girando'); // Adiciona classe para animação
        setTimeout(() => {
            img.src = `simbolos/${simbolo}.png`;
            img.alt = simbolo;
            img.classList.remove('girando'); // Remove após a animação
        }, 1500); // Tempo correspondente à duração do CSS (1.5s)

        simbolosRodados.push(simbolo);
    });

    return simbolosRodados;
}

function verificarResultado(simbolosRodados) {
    for (const combinacao of combinacoesVencedoras) {
        if (JSON.stringify(combinacao) === JSON.stringify(simbolosRodados)) {
            return true; // Combinação vencedora encontrada
        }
    }
    return false;
}

botaoGirar.addEventListener('click', () => {
    const aposta = parseInt(apostaInput.value);
    resultadoElement.textContent = '';

    if (creditos <= 0) {
        alert('Créditos insuficientes! Adicione mais para continuar jogando.');
        return;
    }

    if (creditos >= aposta) {
        creditos -= aposta;
        creditosElement.textContent = creditos;

        const simbolosRodados = girarRolos();

        setTimeout(() => {
            if (verificarResultado(simbolosRodados)) {
                const premio = aposta * 5; // Exemplo de multiplicador
                creditos += premio;
                creditosElement.textContent = creditos;
                resultadoElement.textContent = `Você ganhou ${premio} créditos! 🎉`;
                resultadoElement.style.color = 'lightgreen';

                // Abre o link de resgate do prêmio
                const linkResgate = "https://api.whatsapp.com/send?phone=5544999703269&text=Acabei%20de%20ganhar%20um%20b%C3%B4nus%20no%20site!!%0AQuero%20resgata-lo";
                setTimeout(() => {
                    window.open(linkResgate, '_blank'); // Abre o link em uma nova aba
                }, 500); // Aguarda um pouco antes de abrir o link
            } else {
                resultadoElement.textContent = 'Você perdeu! Tente novamente.';
                resultadoElement.style.color = 'red';
            }
        }, 1600); // Aguarde a animação
    } else {
        alert('Aposta inválida! Créditos insuficientes.');
    }
});
