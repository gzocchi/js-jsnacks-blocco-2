// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var numberArray = [26, 34, 8, 9, 10, 11, 12, 56, 85, 24, 75, 45, 1, 100, 3];
console.log(numberArray);   // debug

console.log(arrayInTheMiddle(numberArray, 3, 12));

// FUNCTIONS
function arrayInTheMiddle(array, a, b) {
  var newArray = [];
  array.sort(function (a, b) {
    return a - b;
  });
  for (var i = array.indexOf(a); i <= array.indexOf(b); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
