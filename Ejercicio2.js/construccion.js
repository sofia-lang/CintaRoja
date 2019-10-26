// a. Sus atributos son: numPuertas, numVentanas, numPisos,
// direccion, altura, largo y ancho del terreno.
// b. Cada uno tiene un metodo que regresa los metros
// cuadrados
// c. Un metodo debe regresar la direccion
// d. Un metodo debe permitir modificar la direccion
// e. Buscar la mejor manera de aprovechar la herencia

class Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largoTerre,
    anchoTerre
  ) {
    (this.numPuertas = numPuertas), (this.numVentanas = numVentanas);
    this.numPisos = numPisos;
    this.direccion = direccion;
    this.altura = altura;
    this.largoTerre = largoTerre;
    this.anchoTerre = anchoTerre;
  }
  getMetrosCuadrados() {
    return this.largoTerre * this.anchoTerre;
  }

  getDireccion() {
    return this.direccion;
  }
  setDireccion(nuevaDireccion) {
    this.direccion = nuevaDireccion;
  }
}
module.exports = {
  Construccion
};
