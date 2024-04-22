class Aluno{
    nome;
    matricula;
    disciplina;

    constructor(nome,matricula,disciplina){
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;

    }

    setNome(nome){ //setar o valor de um atributo
        this.nome=nome;
    }
    getNome(){
        return this.nome;
    }
    setMatricula(matricula){
        this.nome=matricula;
    }
    getMatricula(){
        return this.matricula;
    }
    setDisciplina(disciplina){
        this.nome=disciplina;
    }
    getDisciplina(){
        return this.disciplina;
    }
}
        
module.exports=Aluno;    
