function clicar() {
    let n1 = Number(document.getElementById('txtn1').value)
    let n2 = Number(document.getElementById('txtn2').value)
    let res = document.getElementById('res')
  //  let num1 = Number(n1.value)
  //  let num2 = Number(n2.value)

    let soma = n1 + n2

    res.innerHTML = (`A soma ${soma}`)
}
    