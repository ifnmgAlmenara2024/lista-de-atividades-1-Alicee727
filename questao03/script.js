//Conversor de Temperaturas

let celsius = parseInt (window.prompt('Digite a temperatura em graus Celsius: '));

const fahr = (celsius * (9/5)) + 32;

window.confirm('A temperatura ' + celsius + '*C' + ' em Fahreinheit é ' + fahr.toFixed(1) + '*F');