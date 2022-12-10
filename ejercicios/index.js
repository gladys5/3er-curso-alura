let pantalla = document.querySelector("canvas")
let pincel = pantalla.getContext("2d")
pincel.fillStyle = "lightgray"
pincel.fillRect(0, 0, 600, 400)
let indiceActual = 0
let colores = ["blue", "red", "green"]
pincel.fillStyle = "green"
pincel.fillRect(100, 0, 50, 50)
pincel.fillStyle = "red"
pincel.fillRect(50, 0, 50, 50)
pincel.fillStyle = "blue"
pincel.fillRect(0, 0, 50, 50)

//  crea una función que dibuja un rectángulo que recibe 4 parámetros: la coordenada X, la coordenada Y, el color y la altura del rectángulo. El único valor constante es la base del rectángulo y es igual a 50 píxeles.

// function dibujarRectangulo(x, y, color, altura) {
//   pincel.fillStyle = color
//   pincel.fillRect(x, y, 50, altura)
//   pincel.strokeStyle = "black"
//   pincel.strokeRect(x, y, 50, altura)
// }

// dibujarRectangulo(50, 50, "green", Math.round(Math.random() * 50))
//---------------------------------------------------------------------------------------------------------------------------

// dibujarCirculo. Esa función permite diseñar en la pantalla una circunferencia en el eje X y Y, y también nos permite definir su color.

// function dibujarCirculo(x, y, radio, color) {
//   pincel.fillStyle = color
//   pincel.beginPath()
//   pincel.arc(x, y, radio, 0, 2 * 3.14)
//   pincel.fill()
// }
// dibujarCirculo(300, 200, 10, "red")
// dibujarCirculo(300, 180, 10, "yellow")
// dibujarCirculo(320, 200, 10, "black")
// dibujarCirculo(280, 200, 10, "orange")
// dibujarCirculo(300, 220, 10, "blue")

//funcion dibujarCirculo mejorada
// function dibujarCirculo(x, y, radio, color) {
//   pincel.fillStyle = color
//   pincel.beginPath()
//   pincel.arc(x, y, radio, 0, 2 * 3.14)
//   pincel.fill()
// }
// function dibujarFlor(x, y) {
//   dibujarCirculo(x, y + 20, 10, "blue")
//   dibujarCirculo(x, y, 10, "red")
//   dibujarCirculo(x, y - 20, 10, "yellow")
//   dibujarCirculo(x - 20, y, 10, "orange")
//   dibujarCirculo(x + 20, y, 10, "black")
// }
// dibujarFlor(300, 200)

//-----------------------------------------------
/*
Encontramos algunos datos relevantes en internet sobre la evolución de uso de navegadores o exploradores en los últimos 10 años, el resultado fue el siguiente.

En 2009: 6% Chrome, 47% Firefox, 41% Internet Explorer/Edge*, 3% Safari, 3% Otros.
En 2019: 81% Chrome, 9% Firefox, 3% Internet Explorer/Edge*, 3% Safari, 4% Otros.
*Para simplificar nuestro gráfico sumamos los valores de Internet Explorer e IE Edge, los dos navegadores son de la misma empresa, Microsoft.

Como podrán ver en los datos la relevancia que ganó el navegador de Google (Chrome), teniendo una supremacía del 81% en 2019.

Existen varios tipos de gráficos de barras, en este ejemplo, vamos usar las barras verticales apiladas
escribe una función dibujarBarra que cree una barra (5 rectángulos, el primero azul, el segundo verde, etc)*/

// function dibujarRectangulo(x, y, base, altura, color) {
//   pincel.fillStyle = color
//   pincel.fillRect(x, y, base, altura)
//   pincel.strokeStyle = "black"
//   pincel.strokeRect(x, y, base, altura)
// }

// function escribirTexto(x, y, texto) {
//   pincel.font = "20px lato"
//   pincel.fillStyle = "black"
//   pincel.fillText(texto, x, y)
// }

// let serie2009 = [6, 47, 41, 3, 3]
// let serie2019 = [81, 9, 3, 3, 4]
// let colores = ["blue", "green", "yellow", "red", "gray"]

// function dibujarBarra(x, y, serie, colores, texto) {
//   escribirTexto(x, y - 10, texto)

//   let sumaAltura = 0
//   for (let i = 0; i < serie.length; i++) {
//     let altura = serie[i]
//     dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[i])
//     sumaAltura = sumaAltura + altura
//   }
// }
// dibujarBarra(50, 50, serie2009, colores, "2009")
// dibujarBarra(150, 50, serie2019, colores, "2019")

//--------------------------------------------------------------

/*Orlando está estudiando programación y recibió como desafío crear un programa usando HTML y JavaScript, el programa tiene que mostrar un mensaje con la hora actual en el siguiente formato HH:MM:SS y con las coordenadas (x,y) cuando el usuario haga clic en la pantalla. */

// function mostrarMensaje(evento) {
//   let x = evento.pageX - pantalla.offsetLeft //pos x
//   let y = evento.pageY - pantalla.offsetTop //pos y
//   let d = new Date() //crea una variable de tipo date
//   let hora =
//     checkTime(d.getHours()) +
//     ":" +
//     checkTime(d.getMinutes()) +
//     ":" +
//     checkTime(d.getSeconds())
//   //Verifica si el número de las horas, minutos o segundos, tiene un solo dígito,
//   //caso positivo le adiciona el cero en la frente para obtener el formato deseado 00:00:00
//   function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i
//     }
//     return i
//   }

//   alert("La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y)
// }

// // Aquí viene la llamada a la función con el evento onclick
// pantalla.onclick = mostrarMensaje

// --------------------------------------------------------------------------
/*vamos a liberar que el usuario pueda alterar el color de los círculos que son diseñados en la pantalla. Los colores que liberaremos serán azul, rojo y verde (blue, red y green). */

// function dibujarCirculos(event) {
//   let x = event.pageX - pantalla.offsetLeft
//   let y = event.pageY - pantalla.offsetTop
//   pincel.fillStyle = colores[indiceActual]
//   pincel.beginPath()
//   pincel.arc(x, y, 10, 0, 2 * 3.14)
//   pincel.fill()
//   console.log(x + " , " + y)
//   checkKeycode()
// }
// pantalla.onclick = dibujarCirculos

// document.onkeydown = checkKeycode
// function checkKeycode(e) {
//   var keycode
//   if (window.event) {
//     keycode = window.event.keyCode
//   }
//   if (keycode == 8) {
//     pincel.fillStyle = "lightgray"
//     pincel.fillRect(0, 0, 600, 400)
//   } else if (e) {
//     keycode = e.which
//   }
// }
// function alterarColor() {
//   indiceActual++
//   if (indiceActual >= colores.length) {
//     indiceActual = 0 //vuelve para el primer color, blue
//   }
//   return false //menú contextual padrón de `canvas` no sea exhibido
// }

// pantalla.oncontextmenu = alterarColor
//------------------------------------------------
//Altera el código para que el círculo ni bien llegue al extremo derecho de la pantalla vuelva en sentido contrario (de derecha a izquierda), y cuando retorne al lugar inicial (lado izquierdo), nuevamente se mueva de izquierda a derecha, y así sucesivamente, yendo y volviendo eternamente.

// function disenharCircunferencias(x, y, radio) {
//   pincel.fillStyle = colores[indiceActual]
//   pincel.beginPath()
//   pincel.arc(x, y, radio, 0, 2 * Math.PI)
//   pincel.fill()
// }

// function limpiarPantalla() {
//   pincel.clearRect(0, 0, 600, 400)
// }
// let x = 0
// let y = 20

// function actualizarPantalla() {
//   limpiarPantalla()
//   disenharCircunferencias(x, y, 10)
//   x++

//   if (x == 400) {
//     x = 0

//     limpiarPantalla()
//     disenharCircunferencias(x, y, 10)
//     x++
//     y++
//   }
// }

// setInterval(actualizarPantalla, 0)
//-------------------------------------------------------
/**El desafío de este ejercicio es poder cambiar el color del pincel, haciendo clic en una paleta de colores que vamos a tener en el extremo izquierdo superior de nuestro canvas, vamos a disponibilizar 3 colores para que el usuario pueda escoger el color que quiera en su pincel, los colores que usaremos serán el rojo, verde y azul (red, green y blue) */

let puedoDibujar = false

// variables para dibujar la paleta
let xRojo = 0
let xVerde = 50
let xAzul = 100
let yCuadrados = 0
let tamanhoCuadrados = 50
let colorActual = "blue"

function dibujarCirculo(x, y, colorActual) {
  if (puedoDibujar) {
    pincel.fillStyle = colorActual
    pincel.beginPath()
    pincel.arc(x, y, 5, 0, 2 * 3.14)
    pincel.fill()
  }
}

//Función para dibujar cada uno de los cuadrados de la paleta
function dibujarCuadrado(x, y, tamanho, color) {
  pincel.fillStyle = color
  pincel.fillRect(x, y, tamanho, tamanho)
  pincel.fill()
}

//Función para dibujar la paleta de colores
function dibujarPaletaColores() {
  dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, "red")
  dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, "green")
  dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, "blue")
}

function habilitarDibujar() {
  puedoDibujar = true
}

function deshabilitarDibujar() {
  puedoDibujar = false
}

//Función para delimitar el área
function puedeDisenharArea(xCoordenada, yCoordenada) {
  if (
    xCoordenada >= 0 &&
    xCoordenada < 3 * tamanhoCuadrados + 5 &&
    yCoordenada >= 0 &&
    yCoordenada < tamanhoCuadrados + 5
  ) {
    return false
  } else {
    return true
  }
}

function capturarMovimientoDelMouse(evento) {
  let x = evento.pageX - pantalla.offsetLeft
  let y = evento.pageY - pantalla.offsetTop

  if (puedeDisenharArea(x, y)) {
    dibujarCirculo(x, y, colorActual)
  }
}

function seleccionarColor(evento) {
  let x = evento.pageX - pantalla.offsetLeft
  let y = evento.pageY - pantalla.offsetTop

  //Cada condición altera el color de la variable colorActual

  //Comenzamos por la condición del eje Y que es común para todas
  if (y > yCuadrados && y < yCuadrados + tamanhoCuadrados) {
    if (x > xRojo && x < xRojo + tamanhoCuadrados) {
      colorActual = "red"
      console.log(colorActual)
    } else if (x > xVerde && x < xVerde + tamanhoCuadrados) {
      colorActual = "green"
    } else if (x > xAzul && x < xAzul + tamanhoCuadrados) {
      colorActual = "blue"
    }
  }
}

pantalla.onmousemove = capturarMovimientoDelMouse

pantalla.onmousedown = habilitarDibujar

pantalla.onmouseup = deshabilitarDibujar

dibujarPaletaColores()

pantalla.onclick = seleccionarColor
