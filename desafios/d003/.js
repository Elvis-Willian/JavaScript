function clicar() {
    let nome = document.getElementById('txtnome')
    let sexo = document.getElementById('txtsex')
    let valor = Number(document.getElementById('txtval').value)
    let descmasc = (valor / 100) * 5; 
    let res = document.getElementById('res')
    
  if (sexo == 'masculino') {

    res.innerHTML = (`Olá`)
  }
}
    