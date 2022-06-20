function checar() {
    var n1 = Number.parseInt(document.getElementById('txt1').value)
    var n2 = Number.parseInt(document.getElementById('txt2').value)
    var n3 = Number.parseInt(document.getElementById('txt3').value) 
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')

    if (n1 > n2 && n1 > n3) {
        res.innerHTML=`O número ${n1} é maior!`
    } else if (n2 > n1 && n2 > n3) {
        res.innerHTML=`O número ${n2} é maior!`
    } else {
        res.innerHTML=`O número ${n3} é maior!`
    }

    if (n1 < n2 && n1 < n3) {
        res2.innerHTML= `O número ${n1} é o menor!`
    } else if (n2 < n1 && n2 < n3) {
        res2.innerHTML= `O número ${n2} é o menor!`
    } else {
        res2.innerHTML= `O número ${n3} é o menor!`
    }
}