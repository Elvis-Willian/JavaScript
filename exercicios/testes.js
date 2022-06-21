function checar() {
    var sal = Number.parseFloat(document.getElementById('txt1').value)
    var res = document.getElementById('res')
    
    var porc20 = (sal / 100) * 20 
    var soma20 = sal + porc20   

    var porc15 = (sal / 100) * 15
    var soma15 = sal + porc15

    var porc10 = (sal/100) * 10 
    var soma10 = sal + porc10

    var porc5 = (sal/100) * 5
    var soma5 = sal + porc5
    

    if(sal < 280) {
        res.innerHTML= `Seu salário é R$ ${sal} você irá recerber um aumento de 20% no valor de     R$ ${porc20}, seu salário agora é de R$ ${soma20} `
    } else if (sal > 280 && sal < 700) {
        res.innerHTML= `Seu salário é R$ ${sal} você irá recerber um aumento de 15% no valor de     R$ ${porc15}, seu salário agora é de R$ ${soma15} `
    } else if (sal > 700 && sal < 1500) {
       res.innerHTML= `Seu salário é R$ ${sal} você irá recerber um aumento de 10% no valor de R$ ${porc10}, seu salário agora é de R$ ${soma10} `
    } else {
        res.innerHTML=`Seu salário é R$ ${sal} você irá recerber um aumento de 5% no valor de R$ ${porc5}, seu salário agora é de R$ ${soma5} `
    }
    
}