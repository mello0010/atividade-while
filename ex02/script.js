const prompt = require('prompt-sync')();

let soma = 0;
let resposta = "s";

while (resposta === "s") {
    let numero = Number(prompt("Digite um número: "));

    soma = soma + numero;

    resposta = prompt("Deseja adicionar outro número? (s/n): ");
}

console.log("Soma total: " + soma);