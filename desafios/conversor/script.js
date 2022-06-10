function converter() {
var metros = Number.parseFloat(window.prompt('Digite uma distância em metros (m)'))
res.innerHTML = (`À distância de ${metros}, corresponde a...`)
var km = metros / 1000
var hm = metros * 10
r1.innerHTML= (`${km}`)
//precisa fazer aparecer os numeros após a virgola 
}
