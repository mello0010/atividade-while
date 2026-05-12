const prompt = require('prompt-sync')();

let opcao = -1;
let total = 0;

while (opcao !== 0) {

    console.log("1 - Café Expresso - R$5");
    console.log("2 - Cappuccino - R$7");
    console.log("3 - Pão de Queijo - R$4");
    console.log("0 - Finalizar");

    opcao = Number(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        total = total + 5;
        console.log("Item adicionado");
    }

    else if (opcao === 2) {
        total = total + 7;
        console.log("Item adicionado");
    }

    else if (opcao === 3) {
        total = total + 4;
        console.log("Item adicionado");
    }

    else if (opcao === 0) {
        console.log("Pedido finalizado");
    }

    else {
        console.log("Opção inválida");
    }
}

console.log("Total da conta: R$" + total);