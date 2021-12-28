var ordem = [];
var clickedOrdem = [];
var score = 0;

// 0 - amarelo
// 1 - azul
// 2 - verde
// 3 - vermelho

const amarelo = document.querySelector('#amarelo');
const azul = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const vermelho = document.querySelector('#vermelho');

//funções
// gera ordem
let selectOrdem = () =>{ // isso é uma arrow function 
    let corOrdem = Math.floor(Math.random() * 4);
    ordem[ordem.length] = corOrdem;
    clickedOrdem = [];

    for (let i in ordem) {
        let elementColor = createColorElement(ordem[i]);
        lightColor(elementColor, Number(i)+1);
    }
}
//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
// checa se os botões clicados são os mesmos da ordem gerada no jogo

let checkOrdem = () => {
    for(let i in clickedOrdem){
        if (clickedOrdem[i] != ordem[i]) {
            perdeu();
            break;
        }
    }
    if (clickedOrdem.length == ordem.length) {
        alert(`Pontuação: ${score}\n você venceu esse nível! Iniciando próximo nível...`);
        proximoNivel();
    }
}

// função para o clique do usuario

let click  = (color) => {
    clickedOrdem[clickedOrdem.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
         checkOrdem();
    }, 250);
   
}
// função que retona as cores 
let createColorElement = (color) => {
    if (color == 0) {
        return amarelo;
    }
    else if (color == 1) {
        return azul;
    }
    else if (color == 2) {
        return verde;
    }
    else if (color==3) {
        return vermelho;
    }
}

// função que gera o próximo núvel do jogo
let proximoNivel = () => {
    score++;
    selectOrdem();
}
// função para fim de jogo
let perdeu = () => {
    alert(`Pontuação: ${score}\n fim de jogo!\n `)
    ordem = [];
    clickedOrdem = [];

    iniciar();
}
// inicia o jogo
let iniciar = () => {
    alert('Seja bem - vindo. Iniciando.....');
    score = 0;
    proximoNivel();
}
amarelo.onclick = () =>click(0);
azul.onclick = () =>click(1);
verde.onclick = () =>click(2);
vermelho.onclick = () =>click(3);

iniciar();
// 0 - amarelo
// 1 - azul
// 2 - verde
// 3 - vermelho

