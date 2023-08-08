// exercicio de calculo de desconto a vista, e juros caso o cliente queira parcelar a cima de 6x
// valor de desconto 10%

const valorOriginal = 100;
const quantidadeParcelas = 1;
const descontoAhVista = 10;
const calculoDesconto = (valorOriginal - ((descontoAhVista / 100) * valorOriginal)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const valorParcelado = (valorOriginal / quantidadeParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



if (quantidadeParcelas === 1) {
    console.log(`O valor do tenis com pagamento a vista ja com desconto de ${descontoAhVista}% é ${calculoDesconto}`)
} else {
    console.log(`O valor parcelado fica em ${quantidadeParcelas} parcelas de ${valorParcelado}`); // como usar to.fixed para responder com menos casas decimais
    // console.log(`O valor parcelado fica em ${quantidadeParcelas} parcelas de ${valorParcelado.toFixed(2)}`);
}
