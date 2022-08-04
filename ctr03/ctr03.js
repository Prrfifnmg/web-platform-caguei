function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += "<h3>Contando de 10 a 30: </h3>"
  let cont = 10
  while (cont <= 30) {
      saida.innerHTML += ` ${cont} `
      cont ++
  }
  saida.innerHTML += `` 
}