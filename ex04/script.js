const prompt = require('prompt-sync')();

let produto = "";

do {
    produto = prompt("Digite o nome do produto: ");

    if (produto.length < 3) {
        console.log("Nome inválido");
    }

} while (produto.length < 3);

console.log("Produto cadastrado");