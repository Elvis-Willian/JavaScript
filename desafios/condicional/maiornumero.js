function verificar() {
    var n1 = Number.parseInt(document.getElementById("num1").value)
    var n2 = Number.parseInt(document.getElementById("num2").value)
    var n3 = Number.parseInt(document.getElementById("num3").value)

    var maior = n1

    if(n2 > maior)
    maior = n2
    else if (n3 > maior)
    maior = n3

    res.innerHTML= (`O número ${maior} é maior`)
}