const temIngresso = true;
const censura = 16;
const idade = 14;

// Precisa ter ingresso e ter idade maior ou igual a censura

if (temIngresso === true) {
    if (idade >= censura) { // se a idade for maior ou igual a censura ela pode ou nao entrar
        console.log(`Pode entrar`); // sim idade maior ou igual
    } else {
        console.log(`Barrada`); // idade menor, logo é barrada
    }
} else {
    console.log(`Barrada.`) // percebe que esse else esta ligada ao if de tem ingresso, caso nao tenha ingresso seja barrada
}