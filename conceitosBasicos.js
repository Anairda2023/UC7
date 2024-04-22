//Tipos de dados
//Tipo Primitivo - numero inteiro, boleano
const n=7;
let nome = "Joel";
var idade =9;

//Const não pode ser reatribuída e estar sempre delimitada pelo bloco de código
//bloco (a definição do bloco é o par de chaves)
//let pode ser reatribuido e está sempre delimitada pelo bloco
//Tipo abstrato (objetos)
const dados= {"nome": "Joel", "telefone": 84999981234}
const matriz = [1, 2, 4, "Maria", "João", 9,0]
//Estruturas condicionais
//1-Simples, 2-Composta,3-Composta encadeada
//Operadores relacionais (<, >, <=, >=, !=, !==, ==, ===)
if (5<9)
{
    console.log("Verdade!")
}
//compostas
if (5>9){
    console.log("Verdade!")

}else{
    console.log("Mentira!")
}
//Operadores lógicos
// ! é a negação
//|| é ou
// && é o e

if (5>9 && 8<9){
    console.log("Correto");
}else{
    console.log("incorreto");
}
