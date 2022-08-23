let valorSalario = gets();
let valorBeneficios = parseInt(gets());

if(valorSalario >= 0 && valorSalario <= 1100){
    salario = valorSalario * 0.95;
} else if(valorSalario >= 1100.01 && valorSalario <= 2500.00){
    salario = valorSalario * 0.9;
} else {
    salario = valorSalario * 0.85;
}

let total = (valorBeneficios + salario);
print(total.toFixed(2));

/*
Desafio:
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 

    Valor Bruto do salário - Percentual de Imposto Mediante a Faixa Salarial + Adicional dos Benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

Entrada
A entrada consiste em vários arquivos de teste, que conterá o valor bruto do salário e adicional dos benefícios. Conforme mostrado no exemplo de entrada a seguir.

Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com um número que será a diferença entre o valor bruto do salário e o percentual de imposto mediante a faixa salárial somado com o adicional dos benefícios. 
 */