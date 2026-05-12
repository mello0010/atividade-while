const prompt = require('prompt-sync')();

let numeroSecreto = 7;
let numero = 0;
let tentativas = 0;

while (numero !== numeroSecreto) {
    numero = Number(prompt("Tente adivinhar o número: "));
    
    tentativas = tentativas + 1;

    if (numero !== numeroSecreto) {
        console.log("Errou, tente novamente");
    }
}

console.log("Parabéns! Você acertou.");
console.log("Tentativas: " + tentativas);