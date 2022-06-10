function verificar() {
    var prod = window.prompt('Que produto você está comprando?')
    var vl = Number.parseFloat(window.prompt(`Quanto custa o ${prod} que você está comprando?`))
    var din = Number.parseFloat(window.prompt(`Qual o valor que você deu para pagar o ${prod} ?`))
    var troco = din - vl 

    window.alert(`Você comprou ${prod} que custou R$ ${vl}. Deu R$ ${din} em dinheiro e vai receber R$ ${troco}. Volte Sempre!`)
}