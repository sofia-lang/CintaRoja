// Crea una subclase de Electrodomestico llamada Lavadora
//    con las siguientes características:
//    a. Su atributo es carga(kg de ropa), además de los
//       atributos heredados.
//    b. Crea el método precioFinal(). Este se calcula
//       multiplicando el consumoEnergetico por la carga.

const { Electrodomestico } = require("./Electrodomisticos");

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
  }
}

module.exports = {
  Lavadora
};
