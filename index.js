const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");

alert(
  `Recruta cadastrado com sucesso\n 
  Nome completo: ${primeiroNome} ${sobrenome}\n
  Ano de nascimento: ${anoDeNascimento}\n
  Campo de estudos: ${2022 - campoDeEstudo}
  `
);
