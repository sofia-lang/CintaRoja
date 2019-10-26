const { Edificio } = require("./edificio");
const { Casa } = require("./casa");

const casa1 = new Casa(2, 4, 1, "San Jose", 2.8, 20, 20);
console.log("Los metros cuadrados son: " + casa1.getMetrosCuadrados());
console.log(casa1.getDireccion());
casa1.setDireccion("Alajuela");
console.log(casa1.getDireccion());
