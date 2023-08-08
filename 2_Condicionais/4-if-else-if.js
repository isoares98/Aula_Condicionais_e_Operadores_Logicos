const idade = 19;

// menor de 18 > menor de idade
// maior de idade, mas menor ou igual a 65 anos > adulto
// acima de 65 > idoso

if (idade < 18) { // esse metodo de utilização de if e else, é para estruturar comparações // o codigo para onde a variavel se enquadra
    console.log(`Menor de idade`);
} else {
    // tem 18 ou mais
    if (idade <= 65) // não colocar ; para que o codigo continue
        console.log(`Adulto`);
    // o SEGUNDO ELSE TEM QUE ESTAR DENTRO DA CHAVE DO PRIMEIRO ELSE
    else {
        console.log(`Idosa`);
    }
}

// exemplo sem chaves

const idade2 = 9;

// menor de 18 > menor de idade
// maior de idade, mas menor ou igual a 65 anos > adulto
// acima de 65 > idoso

if (idade2 < 18) { // esse metodo de utilização de if e else, é para estruturar comparações // o codigo para onde a variavel se enquadra
    console.log(`Menor de idade`);
} else if (idade2 <= 65) // não colocar ; para que o codigo continue
    console.log(`Adulto`);
// o SEGUNDO ELSE TEM QUE ESTAR DENTRO DA CHAVE DO PRIMEIRO ELSE
else {
    console.log(`Idosa`);
}
