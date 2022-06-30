let valores = [3 ,6 ,1 ,8 ,7 ,9]

console.log(valores)
let soma = 0
for (let pos in valores) {
    console.log(soma += valores[pos])
}