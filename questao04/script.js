//Conversor de Moedas

const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

const valor = parseFloat(window.prompt('Digite o valor a ser convertido:'));
const moedaOrigem = window.prompt('Digite a moeda de origem (BRL, USD, EUR, GBP):').toUpperCase();
const moedaDestino = window.prompt('Digite a moeda de destino (BRL, USD, EUR, GBP):').toUpperCase();

if (moedaOrigem !== 'BRL' && moedaOrigem !== 'USD' && moedaOrigem !== 'EUR' && moedaOrigem !== 'GBP') {
    window.alert('Moeda de origem inválida.');
} else if (moedaDestino !== 'BRL' && moedaDestino !== 'USD' && moedaDestino !== 'EUR' && moedaDestino !== 'GBP') {
    window.alert('Moeda de destino inválida.');
} else {
    let resultado;
    switch (moedaOrigem) {
        case 'BRL':
            switch (moedaDestino) {
                case 'USD':
                    resultado = valor / taxaUSD;
                    break;
                case 'EUR':
                    resultado = valor / taxaEUR;
                    break;
                case 'GBP':
                    resultado = valor / taxaGBP;
                    break;
                default:
                    resultado = valor;
                    break;
            }
            break;
        case 'USD':
            switch (moedaDestino) {
                case 'BRL':
                    resultado = valor * taxaUSD;
                    break;
                case 'EUR':
                    resultado = (valor * taxaUSD) / taxaEUR;
                    break;
                case 'GBP':
                    resultado = (valor * taxaUSD) / taxaGBP;
                    break;
                default:
                    resultado = valor;
                    break;
            }
            break;
        case 'EUR':
            switch (moedaDestino) {
                case 'BRL':
                    resultado = valor * taxaEUR;
                    break;
                case 'USD':
                    resultado = (valor * taxaEUR) / taxaUSD;
                    break;
                case 'GBP':
                    resultado = (valor * taxaEUR) / taxaGBP;
                    break;
                default:
                    resultado = valor;
                    break;
            }
            break;
        case 'GBP':
            switch (moedaDestino) {
                case 'BRL':
                    resultado = valor * taxaGBP;
                    break;
                case 'USD':
                    resultado = (valor * taxaGBP) / taxaUSD;
                    break;
                case 'EUR':
                    resultado = (valor * taxaGBP) / taxaEUR;
                    break;
                default:
                    resultado = valor;
                    break;
            }
            break;
    }

    window.confirm('O valor convertido é: ' + '$ ' + resultado.toFixed(2) + ' ' + moedaDestino);
}