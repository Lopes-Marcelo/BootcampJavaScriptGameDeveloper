const regex = /^(?!.*[!_@#$%¨&*\d\r\t\v\n]).{1,50}$/;
let input1;
let input2;

while (true) {
    input1 = gets();
    input2 = gets();
    if (!input1 || input1 == '') break;
    if (!(regex.test(input1)) || !(regex.test(input2))) continue;
    console.log(longestCommonSubarray(input1, input2));
}

function longestCommonSubarray(a, b) {
    const m = a.length
    const n = b.length

    let matrix = [...Array(m + 1)].map(e => Array(n + 1).fill(0))

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (a[i] == b[j]) {
            matrix[i][j] = matrix[i + 1][j + 1] + 1
            }
        }
    }

    let maxn = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxn = Math.max(maxn, matrix[i][j])
        }
    }

    return maxn
}

/*
Desafio:
Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').

Entrada
A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída
O tamanho da maior subsequência comum entre as duas Strings. */