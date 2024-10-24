// * Transformem a lista abaixo para o seguinte modelo:
//  * 
//  * 
//  * [ ] - Item Feito // item.status = False
//  * [x] - Item Não Feito // item.status = True
//  */


// const itens = [
//     {id: 1, descricao: "Arrumar a Casa", status: true},
//     {id: 2, descricao: "Arrumar o Escritório", status: true},
//     {id: 3, descricao: "Levar a Filó no PetShop", status: false},
//     {id: 4, descricao: "Tirar o lixo", status: false},
//     {id: 5, descricao: "Fazer as compras", status: true},
// ]

// itens array.forEach(element => {
    
// });
// const itens = [
//     { console.log('filter id',listaItens.filter(n => n% 2==0));
//       console.log('filter descricao',listaItens.filter(n => n% 2==0));
//       console.log('filter status',listaItens.filter(n => n% 2==0));
    

//     }
// ]
/***
 * Exiba a lista abaixo para o seguinte modelo:
 * 
 * 
 * [ ] - Item Feito // item.status = False
 * [x] - Item Não Feito // item.status = True
 */

const items = [
    {id: 1, descricao: "Arrumar a Casa", status: true},
    {id: 2, descricao: "Arrumar o Escritório", status: true},
    {id: 3, descricao: "Levar a Filó no PetShop", status: false},
    {id: 4, descricao: "Tirar o lixo", status: false},
    {id: 5, descricao: "Fazer as compras", status: true},
]

items.forEach(item => {
    if (item.status == true) {
        console.log(`[x] ${item.descricao}`);
    } else {
        console.log(`[ ] ${item.descricao}`);
    }
});

// Converta os elementos da lista abaixo, para letra maiúscula (toUpperCase)
const palavras = ["bola", "tênis", "carro", "celular", "computador"];
    const palavrasMaiusculas = palavras.map(palavra.toUpperCase());
    console.log(palavrasMaiusculas);

    // adicione três nomes a nossa lista de nomes.
    const nomes = []
nomes.push("rodolfo")
nomes.push("rodolfo2")
nomes.push("rodolfo3")
  console.log (nomes);