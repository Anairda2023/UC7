const Conta = require('./Conta');

let c1 = new Conta('Joel Santos', 100);


c1.depositar(1000);

c1.sacar(50);

console.log(c1.getSaldo());

c1.depositar(-9);
c1.sacar(2000)
c1.depositar('Joel');


console.table(c1);