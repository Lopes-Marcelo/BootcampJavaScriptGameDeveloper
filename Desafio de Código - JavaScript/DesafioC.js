// Obs: A função gets é implementada dentro do sistema para ler as entradas (inputs) dos dados e a função print para imprimir a saída (output) de dados.

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

let salary = (valor2 * valor3);
salary = salary.toFixed(2);
print("NUMBER = " + valor1);
print("SALARY = U$ " + salary);


/*
Desafio: 
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

Entrada
Você receberá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

Saída
Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $. */