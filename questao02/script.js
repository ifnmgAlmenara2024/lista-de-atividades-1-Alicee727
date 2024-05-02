//Calculadora de Área de um Retângulo

let base = parseFloat (window.prompt('Qual o comprimento do retângulo? ->'));
let altura = parseFloat (window.prompt('Qual a largura do retângulo? ->'));

const area = base * altura;

window.alert('A área do retângulo especificado é de ' + area.toFixed(1) + ' metros quadrados.');
