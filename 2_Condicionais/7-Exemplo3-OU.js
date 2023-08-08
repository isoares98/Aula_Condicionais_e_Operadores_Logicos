const temIngresso = true;
const censura = 16;
const idade = 13;
const estaComOsPais = false;

// tem ingressos e idade maior ou igual a censura OU estar com seus pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log(`Pode entrar`);
    } else {
        console.log(`Barrado`);
    }
} else { // se a pessoa estiver sem ingresso
    console.log(`Barrada.`);
}