const { Construccion } = require("./construccion");

class Edificio extends Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largoTerre,
    anchoTerre
  ) {
    super(
      numPuertas,
      numVentanas,
      numPisos,
      direccion,
      altura,
      largoTerre,
      anchoTerre
    );
  }
}

module.exports = {
  Edificio
};
