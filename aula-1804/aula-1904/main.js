const Aluno = require('./Aluno');

const Disciplina = require('./Disciplina');

let d1 = new Disciplina('Matemática', "012", 360);
let a1 = new Aluno ("Joel", 20020, d1);


console.table(a1);

console.log(a1.getNome());

console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);


d1.setNome("Filosofia");
console.table(d1)

a1.setNome("Adriana");
console.table(a1)
a1.setMatricula('013');


console.table(a1)

