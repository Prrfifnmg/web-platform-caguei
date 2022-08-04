function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += "<h3>Contando de 100 a 120, marcando os pares:</h3>"

  let cont = 100
  while (cont <= 120) {
      if (cont % 2 == 0) {
          saida.innerHTML += `<strong> ${cont} </strong>`    
      } else {
          saida.innerHTML += ` ${cont} `
      }
      cont ++ 
  }
  saida.innerHTML += ``
}