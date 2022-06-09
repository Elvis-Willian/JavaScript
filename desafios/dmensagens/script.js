function verificar()  {
    var botao1 = window.document.getElementById('b1')
    var botao2 = window.document.getElementById('b2')
    var botao3 = window.document.getElementById('b3')

    if (botao1) {
    window.alert(`Você clicou 1º Botão!`)
    } else if (botao2) {
    window.alert(`Você clicou no 2º botão`)
    } else {
    window.alert(`Você clicou no 3º botão`)
    }
}
