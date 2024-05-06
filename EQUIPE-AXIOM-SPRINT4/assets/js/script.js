// Buscando elementos do DOM
const arena = document.getElementById('arena')
const roboEva = document.getElementById('iconEva')
const roboWallE = document.getElementById('iconWallE')
const placarEva = document.getElementById('placarEva')
const placarWallE = document.getElementById('placarWallE')

// Definindo posição inicial dos robôs
let roboEvaX = 0
let roboEvaY = 0
let roboWallEX = 750
let roboWallEY = 450

// Definindo o total de vida dos robôs
let vidaEva = 100
let vidaWallE = 100

// Definindo constante para o limite de colisões
const LIMITE_COLISOES = 5

// Definindo variável que irá contar o total de colisões
let totalColisoes = 0

// Função para atualizar a posição do robô
const atualizaPosicoes = () => {
  roboWallE.style.left = roboWallEX + 'px'
  roboWallE.style.top = roboWallEY + 'px'

  roboEva.style.left = roboEvaX + 'px'
  roboEva.style.top = roboEvaY + 'px'
}

// Função para atualizar a vida dos robôs
const atualizaVida = () => {
  vidaEva -= Math.floor(Math.random() * 20)
  placarEva.textContent = vidaEva

  vidaWallE -= Math.floor(Math.random() * 20)
  placarWallE.textContent = vidaWallE
}

// Função para resetar a posição dos robôs após colisão
const resetPosicoes = () => {
  roboEvaX = 0
  roboEvaY = 0
  roboWallEX = 750
  roboWallEY = 450

  atualizaPosicoes()
}

// Função para verificar colisões
const verificarColisões = () => {
  const distancia = Math.sqrt(
    (roboEvaX - roboWallEX) * 2 + (roboEvaY - roboWallEY) * 2
  )

  if (totalColisoes >= LIMITE_COLISOES) {
    document.querySelector('.resultado').classList.add('active')
    if (vidaEva > vidaWallE) {
      // Eva ganhou
    } else {
      //Trocando a foto caso o robô vencedor seja o Wall-E
      document.getElementById('roboVencedor').src = 'assets/img/iconWallE.png'
    }
  }

  if (distancia < LIMITE_COLISOES) {
    totalColisoes++
    resetPosicoes()
    atualizaVida()
  }
}

//Função para fechar o modal inicial
const novaPartida = () => {
  document.querySelector('.inicio').classList.add('inactive')
  resetPosicoes()
}

//Função para recarregar tela após final do jogo
const voltar = () => {
  window.location.reload()
}

// Movimento do robô com setas ou letras
document.addEventListener('keydown', event => {
  const { key } = event

  // Robo Eva
  if (key.toUpperCase() === 'A' && roboEvaX > 0) {
    roboEvaX -= 10
  } else if (key.toUpperCase() === 'W' && roboEvaY > 0) {
    roboEvaY -= 10
  } else if (key.toUpperCase() === 'S' && roboEvaY < 450) {
    roboEvaY += 10
  } else if (key.toUpperCase() === 'D' && roboEvaX < 750) {
    roboEvaX += 10
  }
  // Robo Wall-E
  if (key === 'ArrowLeft' && roboWallEX > 0) {
    roboWallEX -= 10
  } else if (key === 'ArrowUp' && roboWallEY > 0) {
    roboWallEY -= 10
  } else if (key === 'ArrowDown' && roboWallEY < 450) {
    roboWallEY += 10
  } else if (key === 'ArrowRight' && roboWallEX < 750) {
    roboWallEX += 10
  }

  atualizaPosicoes()
  verificarColisões()
})
