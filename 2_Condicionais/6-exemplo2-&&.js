// Como usar && dentro do IF e ElSE

const temIngresso = true;
const censura = 16;
const idade = 18;

// tem ingressos e idade maior ou igual a censura

if (temIngresso === true && idade >= censura) { // utilizado para quando você não quer saber o MOTIVO
    // && logico só da certo se todas as condições foram VERDADEIROS
    console.log(`Pode entrar`);
} else {
    console.log(`Barrado`);
}
