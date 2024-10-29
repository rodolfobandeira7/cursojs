// 7 - Escreva um programa que irá receber 4 números e deverá informar a soma de todos os números, o menor número e o maior número, além da média dos valores.

const readline = require('readline-sync');

const number1 = readline.questionFloat("Qual o primeiro numero? ");
const number2 = readline.questionFloat("Qual o segundo numero? ");
const number3 = readline.questionFloat("Qual o terceiro numero? ");
const number4 = readline.questionFloat("Qual o quarto numero? ");

let soma = (number1 + number2 + number3 + number4);
console.log(`A soma dos 4 numeros foi de: ${soma.toFixed(2)}`);

let media = (number1 + number2 + number3 + number4) / 4;
console.log(`A média dos 4 numeros foi de: ${media.toFixed(2)}`);