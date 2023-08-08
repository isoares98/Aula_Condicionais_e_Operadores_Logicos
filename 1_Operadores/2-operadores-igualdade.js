// utilizado para verificar se é igual ou diferente do outro, independente do tipo

// == é uma pergunta para saber se é igual
let ehIgual = 19 == 18; // dará false
ehIgual = 18 == 18; // true
console.log(ehIgual);

// != pergunta para saber se é diferente 
let ehDiferente = 19 != 18; // dará false
ehDiferente = 18 != 18; // true
console.log(ehDiferente);

// comparação de igual ou diferente usando variavel, independente do tipo

let x = 10;

ehDiferente = x != 18; // true por ser diferente do 18
console.log(ehDiferente);

ehIgual = x == 18; // false pois não é igual a 18
console.log(ehIgual);