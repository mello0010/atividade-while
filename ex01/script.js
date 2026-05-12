const prompt = require('prompt-sync')();

let senha = "";

while (senha !== "1234") {
    senha = prompt("Digite a senha: ");

    if (senha !== "1234") {
        console.log("Senha incorreta");
    }
}

console.log("Acesso Permitido");