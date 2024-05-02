//Calculadora de IMC (Índice de Massa Corporal)

let peso = parseInt (window.prompt('Digite o seu peso: '));
let altura = parseFloat (window.prompt('Digite a sua altura: '));

const imc = peso/(altura * altura);

if (imc < 18.5) {
    window.alert('Seu IMC é ' + imc.toFixed(2) + ' e você está abaixo do peso.');
}else if (imc >= 18.5 && imc < 24.9) {
    window.alert('Seu IMC é ' + imc.toFixed(2) + ' e você está no peso normal.');
}else if (imc >= 25.0 && imc < 29.9) {
    window.alert('Seu IMC é ' + imc.toFixed(2) +' e isso constata sobrepeso!');
}else if (imc >= 30.0 && imc < 34.9) {
    window.alert('Seu IMC é ' + imc.toFixed(2) + ' e isso constata Obesidade Grau I!');
}else if (imc >= 35.0 && imc < 39.9) {
    window.alert('Seu IMC é ' + imc.toFixed(2) + ' e isso constata Obesidade Grau II(Mórbida!)!');
}else {
    window.alert('Seu IMC é ' + imc.toFixed(2) + ' e isso constata Obesidade Grau III(Mórbida!)!');
}
