/** 
 * Solicitar a idade e o sexo da pessoa.
 * Se for maior ou igual a 18 anos, verificar se é do sexo masculino.
 * Se for do sexo masculino, informar "Bem-vindo ao exército brasileiro";
 * Se for do sexo feminino, perguntar "Desejar se alistar ao exército? ".
 * Se sim, informar "Bem-vindo ao exército brasileiro".
 * Se não, informar "Obrigado."
*/
const readline = require("readline-sync");
const idade = readline.questionInt("Qual a sua idade?\n");
// MAIOR DE IDADE
if (idade >= 18) {
    const sexo = readline.question("Qual o seu sexo? M - Masculino | F - Feminino \n")
    if (sexo.toUpperCase() == 'M') {
        console.log("Bem-vindo ao exercito brasileiro");
    } else if (sexo.toUpperCase() == 'F') {
        const resposta = readline.question("Desejar se alistar ao exercito? S - SIM | N - Nao\n");
        if (resposta.toUpperCase() == 'S') {
            console.log("Bem-vindo ao exercito brasileiro");
        } else {
            console.log("Obrigado.");
        }
    }
} else {
    console.log("Voce ainda e menor de idade. ");
}