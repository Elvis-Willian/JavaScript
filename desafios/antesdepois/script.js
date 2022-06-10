function verificar() {
    var n = Number.parseInt(window.prompt('Digite um número'))
    var ant = n - 1
    var dep = n + 1
    window.alert(`Antes de ${n} temo o número ${ant}. Depois de ${n} temos o número ${dep}`)
}