// npm install readline-sync
const readline = require("readline-sync");

const sexo = readline.question("Qual o seu sexo? M - Masculino ou F - Feminino ");

//  sexo.toUpperCase() - Para letras maiúscula
if (sexo.toUpperCase() == "M") {
    console.log("pode entrar no banheiro masculino");
} else if (sexo.toLowerCase() == "f") {
    console.log("Não pode entrar no banheiro masculino.");
} else {
    console.log("Opção desconhecida.");
}
/**
 *    ==    - Operador lógico de comparação
 *    >     - Operador lógico maior que
 *    >=    - Operador lógico maior ou igual à
 *    <     - Operador lógico menor que
 *    <=    - Operador lógico menor ou igual à
 *    !=    - Operador lógico diferente de
 * 
 *   condição operador valor
 *   sexo == "M"
 *   idade >= 18
 *   senha == novaSenha
 */
/** 
 * Solicitar o nome do aluno, as 4 notas dele no ano, calcular a média final. 
 * Se a média for maior ou igual 6, exibir "O aluno <nome> foi aprovado com a média <media>".
 * Senão, exibir "O aluno <nome> foi reprovado com a média <media>".
*/