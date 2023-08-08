// ternário em JavaScript é uma forma concisa de escrever uma estrutura condicional 
// simples com apenas uma linha de código. Ele é uma espécie de atalho para o if...else
// e permite que você tome decisões baseadas em uma condição de forma rápida e fácil.

const saldo = 100.00;

const unidade = (saldo === 1 ? "real" : "reias");

console.log(`Seu saldo é de ${saldo} ${unidade}`);


//if (saldo === 1) {
  //  console.log(`Você tem ${saldo} real`);
//} else {
  //  console.log(`Você tem ${saldo} reais`);
//}
