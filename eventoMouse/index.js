let pantalla = document.querySelector("canvas")
let pincel = pantalla.getContext("2d")
pincel.fillStyle = "lightgray"
pincel.fillRect(0, 0, 600, 400)

function exibirAlerta(event) {
  let x = event.pageX - pantalla.offsetLeft
  let y = event.pageY - pantalla.offsetTop
  console.log(event)
  console.log(x + " , " + y)
}
function dibujarCirculos(event) {
  let x = event.pageX - pantalla.offsetLeft
  let y = event.pageY - pantalla.offsetTop
  pincel.fillStyle = "blue"
  pincel.beginPath()
  pincel.arc(x, y, 10, 0, 2 * 3.14)
  pincel.fill()
  console.log(x + " , " + y)
  checkKeycode()
}

document.onkeydown = checkKeycode

function checkKeycode(e) {
  var keycode
  if (window.event) {
    keycode = window.event.keyCode
  }
  if (keycode == 8) {
    pincel.fillStyle = "lightgray"
    pincel.fillRect(0, 0, 600, 400)
  } else if (e) {
    keycode = e.which
  }
}
pantalla.onclick = dibujarCirculos
