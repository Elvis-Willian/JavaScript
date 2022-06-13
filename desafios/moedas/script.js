var dl = Number.parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {

    var real = Number.parseFloat(window.prompt('Quantos R$ você tem?'))
    
    var con = real / dl 
    con.toFixed(2)

    res.innerHTML = (`Você tem ${con} Dólares.`)
}