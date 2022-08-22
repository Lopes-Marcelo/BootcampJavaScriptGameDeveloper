let T = parseInt(gets());

for(let i = 0; i < T; i++){
  var s = gets().split(" ");
  let N = parseInt([0]);
  let K = parseInt([1]);

  var total = (N % K) + (N / K);
  print(Math.trunc(total));
}

/*
Desafio:
A primeira linha de entrada contém inteiro T (1 ≤ T ≤ 10000) , que indica o número de casos de teste. Em cada uma das T linhas a seguir vêm dois inteiros N e K (1 ≤ K, N ≤ 10000),  respectivamente o número de refrigerantes comprados e o número de garrafas vazias para ganhar uma cheia.

Saída
Para cada caso de teste imprima o número de garrafas que o cliente terá no segundo dia, se aproveitar ao máximo a oferta. */