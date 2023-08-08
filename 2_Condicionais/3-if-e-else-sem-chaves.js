// como utilizar if e else sem as { chaves }

// DIFERENÇAR COM E SEM CHAVES
// COM: você pode utilizar QUANTAS linhas quiser dentro de IF ou ELSE
// SEM: SOMENTE UMA linha, como o exemplo a cima.

// exemplo sem CHAVES
const idadeSemChaves = 9;

if (idadeSemChaves >= 18)
    // é executado caso a condição seja verdadeira
    console.log(`é maior de idade`);
else
    // é executado caso a condição seja falsa
    console.log(`é menor de idade`);
// conesole.log(`não pode beber`); //>> OBSERVE QUE A LINHA NÃO ESTA DENTRO DO ELSE


let idadeComChaves = 29;

if (idadeComChaves >= 18) {
    // é executado caso a condição seja verdadeira
    console.log(`é maior de idade`);
    console.log(`acesso liberado`);
} else {
    // é executado caso a condição seja falsa
    console.log(`é menor de idade`);
    console.log(`nao pode beber bebidas alcoolicas, acesso restrito`);
}