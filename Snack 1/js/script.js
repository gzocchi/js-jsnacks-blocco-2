// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var racingBike = [
  {
    nome: "BIANCHI - Via Nirone 7",
    peso: 9.66,
  },
  {
    nome: "TREK - Checkpoint ALR 4",
    peso: 10.26,
  },
  {
    nome: "CANYON - Speedmax CF 8 DISC",
    peso: 9.32,
  },
  {
    nome: "SCOTT - Speedster 10",
    peso: 9.5,
  },
  {
    nome: "SPECIALIZED - S-Works Shiv Disc",
    peso: 6.5,
  },
];
console.log(racingBike);

// Stampare a schermo la bici con peso minore.
var weightArray = [];
for (var i = 0; i < racingBike.length; i++) {
  weightArray.push(racingBike[i].peso);
}
console.log(weightArray); // debug

var minWeight = Math.min.apply(null, weightArray);
console.log(minWeight); // debug

var lightBike = [];
for (i = 0; i < racingBike.length; i++) {
  if (minWeight == racingBike[i].peso) {
    lightBike = racingBike[i];
  }
}
console.log(lightBike); // debug
console.log("La bicicletta più leggera è: " + lightBike.nome + "\ncon un peso di: " + lightBike.peso + " Kg");
