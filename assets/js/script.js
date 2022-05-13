const relogio = document.querySelector('#relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let timer
let seg = 0

function getTimeSeconds(seg) {
  const data = new Date(seg * 1000)
  return data.toLocaleTimeString('pt-Br', {
    hour12: false,
    timeZone: 'GMT'
  })
}

pausar.addEventListener('click', function (e) {
  clearInterval(timer)

  relogio.style.color = 'red'
})
zerar.addEventListener('click', function (e) {
  relogio.innerHTML = '00:00:00'
  seg = 0

  clearInterval(timer)
})

document.addEventListener('click', function (e) {
  let el = e.target

  if (el == iniciar) {
    clearInterval(timer)
    timer = setInterval(function () {
      seg++
      relogio.innerHTML = getTimeSeconds(seg)
    }, 1000)

    relogio.style.color = 'black'
  }
})
