const { Maestro } = require("./Maestro");

class maestroMusica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}
module.exports = {
  maestroMusica
};
