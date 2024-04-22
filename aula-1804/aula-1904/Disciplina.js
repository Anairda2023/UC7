class Disciplina{
    nome;
    codigo;
    ch;

    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch=ch;

    }

    setNome(nome){
        this.nome=nome;
    }
    getNome(){
        return this.nome;
    }

    setCodigo(codigo){
        this.nome=codigo;
    }
    getCodigo(){
        return this.codigo;
    }

    setCh(ch){
        this.ch=ch;
    }
    getCh(){
        return this.ch;
    }
}

module.exports=Disciplina;