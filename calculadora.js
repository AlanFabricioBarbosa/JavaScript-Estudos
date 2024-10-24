const x = parseFloat(prompt("Informe o primeiro número: "));
const y = parseFloat(prompt("Informe o segundo número: "));

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  `
  Resultado:\n
  Soma: ${soma}\n
  subtração: ${subtracao}\n
  multiplicação: ${multiplicacao}\n
  divisão: ${divisao}\n
  `
);
