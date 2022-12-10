let pantalla = document.querySelector("canvas")
let pincel = pantalla.getContext("2d")
pincel.fillStyle = "white"
pincel.fillRect(0, 0, 600, 400)

function dibujar(x, y, color) {
  pincel.fillStyle = color
  pincel.fillRect(x, y, 50, 50)
  pincel.strokeStyle = "black"
  pincel.strokeRect(x, y, 50, 50)
}

let random = Math.round(Math.random() * 50)

let x = 0
while (x <= 600) {
  dibujar(x, 0, "red")
  dibujar(x, 50, "yellow")
  dibujar(x, 100, "green")
  x = x + 50
}
// }
// for (let x = 0; x < 600; x = x + 50) {
//   dibujar(x, 0, "red")
//   dibujar(x, 50, "yellow")
//   dibujar(x, 100, "green")
// }
