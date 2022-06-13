function converter() {
var metros = Number.parseFloat(window.prompt('Digite uma distância em metros (m)'))
metros.toFixed(2)
res.innerHTML = (`À distância de ${metros}, corresponde a...`)
var km = metros / 1000
var hm = metros / 100
var dam = metros / 10
var dm =  metros * 10
var cm = metros * 100
var mm = metros * 1000



r1.innerHTML= (`${km}`)
r2.innerHTML= (`${hm}`)
r3.innerHTML= (`${dam}`) 
r4.innerHTML= (`${dm}`)
r5.innerHTML= (`${cm}`)
r6.innerHTML= (`${mm}`)



//precisa fazer aparecer os numeros após a virgola 

}
