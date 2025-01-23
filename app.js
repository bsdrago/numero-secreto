let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute === numeroSecreto) {
        exibirTextNaTela('h1', 'Acertou');
        let palavraTentativa = (tentativas === 1) ? "tentativa" : "tentativas";
        exibirTextNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);

        // Retira o atributo do botao
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextNaTela('p', `O número secreto é maior que ${chute}`);
        }
        limparCampo();
        tentativas++;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //Opção 1
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});

    //opção 2
    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR';
    //     utterance.rate = 1.2;
    //     window.speechSynthesis.speak(utterance);
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.round((Math.random() * numeroLimite) + 1);

    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];;;;
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', '');
}

function exibirMensagemInicial() {
    exibirTextNaTela('h1', 'Jogo do numero secreto');
    exibirTextNaTela('p', 'Escolha um número entre 1 e 100');
}

reiniciarJogo();

