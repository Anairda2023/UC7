class Disciplina{
    nome;
    codigo;
    ch;
    nota;
    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch=ch;
        this.nota=[];

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
    setNota(nota){
        this.nota.push(nota);



    }

    getNota(){
        return this.nota;

    }
    situacaoDisciplina(){
        let media = 0;
        for (let i=0; i<this.nota.length; i++){
            media+=this.nota[i];
        }
        media = media/this.nota.length;
        
            if(media>=6){
                return `Média: ${media} - Aprovado`;
            }else{
                return `Média: ${media} -Reprovado`;
            }
    }
}

module.exports=Disciplina;