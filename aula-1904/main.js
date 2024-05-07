const Aluno = require('./Aluno');

const Disciplina = require('./Disciplina');

let d1 = new Disciplina('Matemática', "012", 360);
let d2 =new Disciplina ('Física', '014', 120);
let d3 = new Disciplina ("Português", '015', 60)
let a1 = new Aluno ("Joel", 20020, [d1]);


console.table(a1);

console.log(a1.getNome());

// console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);


d1.setNome("Filosofia");
console.table(d1)

a1.setNome("Adriana");
console.table(a1)
a1.setMatricula('013');


console.table(a1)

//Atribuir uma nota para o aluno

// a1.getDisciplina().setNota(9.5);
console.table(a1);
a1.setDisciplina(d2);
a1.setDisciplina(d3);
d1.setNota(10);
d1.setNota(3);
d1.setNota(0);
d1.setNota(5);
d2.setNota(9);
d2.setNota(4);
d2.setNota(5);
d2.setNota(9);
d3.setNota(5);
d3.setNota(10);
d3.setNota(1);
d3.setNota(9);

a1.getDisciplina();

a1.boletim();
