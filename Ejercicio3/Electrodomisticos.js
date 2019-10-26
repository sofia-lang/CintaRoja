// Crea una superclase llamada Electrodoméstico con las
//    siguientes características:
//    a. Sus atributos son precio, color, consumoEnergetico
//       y capacidad (peso máximo)
//    b. El constructor solo debe pedir precio, color
//       y capacidad.
//    c. consumoEnergetico debe iniciar con valor de 100
// . Crea el método precioFinal(). Este se calcula
//       multiplicando el consumoEnergetico por la carga.

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnerg = 100;
  }
  getprecioFinal() {
    return this.consumoEnerg * this.carga;
  }
}
module.exports = {
  Electrodomestico
};
