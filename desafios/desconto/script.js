function calcular() {
    var prod = window.prompt('Qual é o produto que você está comprando?')
    var preco = Number.parseFloat(window.prompt(`Qual é o valor do ${prod}?`))

    var des= preco / 10 
    var valor = preco - des

    res.innerHTML= (`Calculando desconto de 10% para ${prod}`)
    r1.innerHTML= (`O preço origial era R$ ${preco}.`)
    r2.innerHTML= (`Você acaba de ganhar R$ ${des} de desconto (-10%).`)
    r3.innerHTML= (`No fim, você var pagar R$ ${valor} no produto ${prod}.`)
}