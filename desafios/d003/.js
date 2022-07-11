function checar() {
let n = Number(document.getElementById('txtn').value)
let res = document.getElementById('res')
const random = (num) => Math.floor(Math.random() * num);

  if (n == random) {
    res.innerHTML = (`você digitou o número ${n} e o número sorteado foi o ${random}, Acertou`)
  } else {
    res.innerHTML = (`você digitou o número ${n} e o número sorteado foi o ${random}, ERROU`)
  }
      
}


