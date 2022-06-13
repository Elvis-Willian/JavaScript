function media() {
var nota1 = Number.parseFloat(window.document.getElementById("nt1").value)
var nota2 = Number.parseFloat(window.document.getElementById("nt2").value)

var med = (nota1 + nota2) / 2 

if(med < 7 ) {
    msg.innerHTML= (`Sua média é de ${med}, você está REPROVADO`)
} else if (med == 10) {
    msg.innerHTML= (`Sua média é de ${med}, você está APROVADO COM DISTINÇÃO`)
} else {
    msg.innerHTML=(`Sua média é de ${med}, você está APROVADO`)
}

}