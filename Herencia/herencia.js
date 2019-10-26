const { maestroMusica } = require("./maestrodeMusica");
const { maestroFisica } = require("./maestroFisica");

const musica = new maestroMusica("Musica", [20, 45, 50], 35);
const fisica = new maestroFisica("Fisica", [40, 80, 75], 5);

// console.log(musica);
// console.log(fisica);

console.log(musica.getpromedio());
