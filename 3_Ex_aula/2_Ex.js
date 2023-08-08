const valorOriginal = 100;
const quantidadeParcelas = 8;
const descontoAhVista = 10;
const calculoDesconto = (valorOriginal - ((descontoAhVista / 100) * valorOriginal)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const valorSemJurosParcelado = (valorOriginal / quantidadeParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const jurosParcela = (1 / 100);
const montanteJuros = (valorOriginal * (1 + jurosParcela) ** quantidadeParcelas);
const montanteDeJurosReais = montanteJuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const valorTotalComJuros = (quantidadeParcelas * montanteJuros).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

if (quantidadeParcelas === 1) {
    console.log(`O valor do tenis com pagamento a vista ja com desconto de ${descontoAhVista}% é ${calculoDesconto}`)
} else {
    if (quantidadeParcelas <= 7) {
        console.log(`O valor fica em ${quantidadeParcelas} parcelas de ${valorSemJurosParcelado}`);
    } else {
        console.log(`O valor fica em ${quantidadeParcelas}X de ${montanteDeJurosReais} com juros de ${jurosParcela}% ao mês, dando o valor total de ${valorTotalComJuros}`)
    }

}