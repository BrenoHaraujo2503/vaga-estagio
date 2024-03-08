// 1) Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);

let indice = 13;
let soma = 0;

for (let k = 0; k < indice;) {
    k = k + 1
    soma = soma + k
}
console.log(soma)
// RESULTADO = 91