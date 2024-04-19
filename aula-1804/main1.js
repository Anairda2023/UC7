const Conta = require('./Conta');

let c1 = new Conta('Joel Santos', 100);


c1.depositar(1000);

c1.sacar(50);
c1.sacar(1000);
console.log(c1.getSaldo());

console.table(c1);