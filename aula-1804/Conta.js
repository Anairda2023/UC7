class Conta{
    titular
    saldo
    
    
    constructor(titular,saldo){

        this.titular=titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo +=valor;
    }
    sacar(valor){
        this.saldo -=valor;
    }
    getSaldo(){
        return this.saldo;
    }
}

module.exports=Conta;

