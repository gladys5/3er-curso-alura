let pantalla = document.querySelector("canvas")
let pincel = pantalla.getContext("2d")
pincel.fillStyle = "lightgrey"
pincel.fillRect(0, 0, 600, 400)

let indiceActual = 0
let colores = ["blue", "red", "green"]

function disenharCircunferencias(x, y, radio) {
  pincel.fillStyle = colores[indiceActual]
  pincel.beginPath()
  pincel.arc(x, y, radio, 0, 2 * Math.PI)
  pincel.fill()
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400)
}
let x = 0
let y = 20

function actualizarPantalla() {
  limpiarPantalla()
  disenharCircunferencias(x, y, 10)
  x++
}

setInterval(actualizarPantalla, 0)
