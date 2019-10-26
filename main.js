// Hacer una función que convierta de grados
// centígrados a Farenheit  (32 °C × 9/5) + 32

// let cent = 100

// var afaren = function (params) {
//     console.log(cent * 1.8 + 32);
// }
// afaren()

// function afaren(cels) {
//     let operacion=(cels * 1.8 + 32)
//     let redondeo = Math.round(operacion)
//     let text= `${cels} C = ${redondeo} F`
//     return text
// }

// console.log(afaren(14));

// Función que pida N parametros y devuelva
// cuantos parámetros se le pasaron

// let contador=0

// function incrementar(){
//    }
// }
// contador++
// console.log (contador)

let myPenguin = {
  name: "Squeak",
  origin: "Pip",
  creador: "Bertramp Lamp "
}

//console.log ( "Hola, soy un pinguino, mi nombre es:" + pinguino.name)

myPenguin.puedeVolar = "No puede volar"

//console.log (myPenguin)

myPenguin.graznar = function() {
  return "Waak Waak"
}
//console.log(myPenguin.graznar())

myPenguin.saludar = function() {
  return "Hola, soy un pinguino, mi nombre es:" + this.name
}
//console.log(myPenguin.saludar());

myPenguin.name = "Senor Pingu"
//console.log(myPenguin.saludar());

myPenguin.puedeVolar = false

myPenguin.volar = function() {
  if (this.puedeVolar == true) {
    return "Puedo volar!!"
  } else {
    return "No puedo volar! :("
  }
}
//console.log(myPenguin.volar());

let mole = {
  porciones: 2,
  ingrediente1: "canela",
  ingrediente2: "comino",
  ingrediente3: "cocoa"
}

//console.log(`${"Mole"}
// ${"Porciones:"} ${mole.porciones}
// ${"Ingrediente 1:"} ${mole.ingrediente1}
// ${"Ingrediente 2:"} ${mole.ingrediente2}
// ${"Ingrediente 3:"} ${mole.ingrediente3}`)

let libro = {
  titulo: "Cometas en el Cielo",
  autor: "Khaled Husseini",
  leido: true
}
libro.status = true

libro.leido = function() {
  if (this.status == true) {
    return "Ya ha sido leido"
  } else {
    return "No ha sido leido"
  }
}
console.log(`${"Libro 1"}
${"Titulo"}
   ${libro.titulo} 
${"Autor"}
    ${libro.autor}
${"Status"}
${libro.leido()}`)

let libro2 = {
  titulo2: "Dispara yo ya estoy muerto",
  autor2: "Julia Navarro",
  leido2: false
}
libro.status2 = true

libro2.leido2 = function() {
  if (this.status2 == true) {
    return "Ya ha sido leido"
  } else {
    return "No ha sido leido"
  }
}
console.log(`${"Libro 2"}
  ${"Titulo"}
     ${libro2.titulo2} 
  ${"Autor"}
      ${libro2.autor2}
  ${"Status2"}
  ${libro2.leido2()}`)
