let tels = document.getElementById('tels')
let teln = document.getElementById('teln')

let locs = document.getElementById('locs')
let locn = document.getElementById('locn')

let moras = document.getElementById('moras')
let moran = document.getElementById('moran')

let devs = document.getElementById('devs')
let devn = document.getElementById('devn')

let trabs = document.getElementById('trabs')
let trabn = document.getElementById('trabn')

let res = document.getElementById('res')

function analisarDados() {
    if (tels && locs){
        res.innerHTML = 'Você é  Suspeito'
    }
    if (tels && moras) {
        res.innerHTML = 'aaaa'
    }
    if (tels && devs) {
        res.innerHTML = ''
    }

};

/*21. Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" O script deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/
