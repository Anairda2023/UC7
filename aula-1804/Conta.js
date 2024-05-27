class Conta {
    titular
    saldo


    constructor(titular, saldo) {

        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0 && typeof valor == 'number') {
            this.saldo += valor;
        } else {
            console.log("Valor inválido");
        }
    }

    sacar(valor) {
        if (valor > 0 && typeof valor == 'number' && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente')
        }
    }
    getSaldo() {
        return this.saldo;
    }
}

module.exports = Conta;

