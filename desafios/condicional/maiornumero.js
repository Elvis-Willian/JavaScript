function verificar() {
    var n1 = Number.parseInt(document.getElementById("num1").value)
    var n2 = Number.parseInt(document.getElementById("num2").value)
    var n3 = Number.parseInt(document.getElementById("num3").value)

    if( n1 > n2 || n1 > n3) {
        res.innerHTML= (`O número ${n1} é maior`)
    } else if ( n2 > n1 || n2 > n3) {
        res.innerHTML= (`O número ${n2} é maior`)
    } else {
        res.innerHTML= (`O número ${n3} é maior`)
    }

}