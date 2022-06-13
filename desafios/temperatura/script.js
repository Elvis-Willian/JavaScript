function converter() {
    var temp = Number.parseFloat(window.prompt('Digite uma temperatura em ºC (Celsius)'))

    res.innerHTML = (`A temperatura de ${temp}ºC, corresponde a...` )

    var kv = temp + 273
    var fr = temp * 1.8 + 32
    kv.toFixed(2)
    fr.toFixed(3)

    r1.innerHTML= (`${kv}ºK (Kelvin)`)
    r2.innerHTML= (`${fr}ºF (Fahrenheit)`) 
}