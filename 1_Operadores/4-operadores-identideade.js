// === verifica se é identico, além de verificar se o conteudo é identico tbm verifica se é do mesmo tipo

let ehIdentico = 18 === 18; //treu, pois é do tipo number e são numeros iguais 
console.log(ehIdentico);

ehIdentico = 18 === "18"; // false, pois um é do tipo number e o outro é do tipo string, mesmo que seja o mesmo numero
console.log(ehIdentico);

ehIdentico = "18" === "18"; // treu, pois são do tipo string e tem o mesmo conteudo
console.log(ehIdentico);


// !== verifica se é diferente

let ehDiferente = 18 !== 18; // false, pois é do tipo number e são numeros iguais 
console.log(ehDiferente);

ehDiferente = 18 !== "18"; // true, pois um é do tipo number e o outro é do tipo string, mesmo que seja o mesmo numero
console.log(ehDiferente);

ehDiferente = "18" !== "18"; // false, pois são do tipo string e tem o mesmo conteudo
console.log(ehDiferente);