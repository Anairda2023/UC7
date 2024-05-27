const Pessoa = require('./Pessoa');

let p1=new Pessoa('Joel Santos', 18, 'Masculino', 123);


console.log(`${p1.getNome()} ${p1.getIdade()}`)

console.log(p1.exibirDados())
console.table(p1)