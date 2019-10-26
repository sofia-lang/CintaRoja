// let myPenguin = {
//   name: "Squeak",
//   origin: "Pip",
//   creador: "Bertramp Lamp "
// }

// //console.log ( "Hola, soy un pinguino, mi nombre es:" + pinguino.name)

// myPenguin.puedeVolar = "No puede volar"

// //console.log (myPenguin)

// myPenguin.graznar = function() {
//   return "Waak Waak"
// }
// //console.log(myPenguin.graznar())

// myPenguin.saludar = function() {
//   return "Hola, soy un pinguino, mi nombre es:" + this.name
// }
// //console.log(myPenguin.saludar());

// myPenguin.name = "Senor Pingu"
// //console.log(myPenguin.saludar());

// myPenguin.puedeVolar = false

// myPenguin.volar = function() {
//   if (this.puedeVolar == true) {
//     return "Puedo volar!!"
//   } else {
//     return "No puedo volar! :("
//   }
// }
//console.log(myPenguin.volar());

// class Penguin {
//   constructor(name, origin, creador, puedeVolar) {
//     ;(this.name = name),
//       (this.origin = origin),
//       (this.creador = creador),
//       (this.puedeVolar = puedeVolar)
//   }

//   Volar() {
//     if (this.puedeVolar == true) {
//       return "Puedo volar!!"
//     } else {
//       return "No puedo volar! :("
//     }
//   }

//   saludar() {
//     return "Hola, soy un pinguino, mi nombre es:" + this.name
//   }
// }

// let pinguino = new Penguin("Senor Pinguino", "Pip", "Lamp", false)
// console.log(pinguino, pinguino.Volar(), pinguino.saludar())

// let pinguino2 = new Penguin("Squeak", "Penguin Islans", "Kurkov", true)
// console.log(pinguino2, pinguino2.saludar(), pinguino2.Volar())

// Haz una clase llamada Persona que siga las siguientes condiciones:
// Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// calcularIMC()
// esMayorDeEdad()
// El constructor pide nombre, edad,sexo,peso y altura
// Generar el RFC a partir de el nombre, edad y sexo

class Persona {
  constructor(nombre, edad, ID, sexo, peso, altura) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.ID = ID),
      (this.sexo = sexo),
      (this.peso = peso),
      (this.altura = altura);
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }
  
  mayordeEdad(edad){
    if (edad =< 18) {
        return ""
    } else {
        
    }
}
}



let persona1 = new Persona("Sofia", "32", "113090799", "F", 60, 1.6);
console.log(persona1.calcularIMC());
