//apenas testando
let listaDeNumerosSorteados = [];
let valorMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirTextoNaTela("h1", "Jogo do número secreto!");
exibirTextoNaTela("p", "Selecione um número de 1 a " + valorMaximo);

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() *valorMaximo + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length
        if(quantidadeDeElementos == valorMaximo){
            listaDeNumerosSorteados = [];
        }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function telaInicial() {
numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;
exibirTextoNaTela("h1", "Jogo do número secreto!");
exibirTextoNaTela("p", "Selecione um número de 1 a " + valorMaximo);
limparCampo();    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você descobriu o número secreto! em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("p",mensagem);
        document.getElementById("reiniciar").removeAttribute("Disabled");
        document.getElementById("chute").disabled = true;
    } else { if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor!");       
        } else { 
                exibirTextoNaTela("p","O número secreto é maior!");      
        }
    limparCampo();    
    tentativas++;}
}

function reiniciarJogo() {
    document.getElementById("chute").disabled = false;
    document.getElementById("reiniciar").disabled = true;
    telaInicial();
}