const { Maestro } = require("./Maestro");

class maestroFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}
module.exports = {
  maestroFisica
};
