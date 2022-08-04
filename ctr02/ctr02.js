function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h3>Números pares de 100 até 120: </h3>`
  let cont = 100
  while (cont <= 120) {
      if (cont % 2 == 0) {
          saida.innerHTML += ` ${cont} `    
      } else {
          saida.innerHTML 
      }
      cont ++ 
  }
  saida.innerHTML 
}