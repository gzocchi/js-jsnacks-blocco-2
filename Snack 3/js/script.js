// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const numberArray = [26, 34, 8, 9, 10, 11, 12, 56, 85, 24, 75, 45, 1, 100, 3];
console.log(numberArray); // debug

const filterArray = (array, a, b) => {
  if (a < 0 || b <= a || b > array.length || array.length <= 0 || isNaN(a) || isNaN(b)) {
    return ["error"]
  }
  const filter = array.filter(
    (element, i) => i >= a && i <= b
    );
  return filter;
};

console.log(filterArray(numberArray, -1, 5));     // debug
console.log(filterArray(numberArray, 2, 2));      // debug
console.log(filterArray(numberArray, 2, 1));      // debug
console.log(filterArray(numberArray, 2, 50));     // debug
console.log(filterArray(numberArray, "a", 2));    // debug
console.log(filterArray(numberArray, 2, "b"));    // debug
console.log(filterArray(numberArray, "a", "b"));  // debug
console.log(filterArray(numberArray, 2, 5));


// console.log(arrayInTheMiddle(numberArray, 3, 12));
// console.log(estraiArray(numberArray, 2, 10));

// FUNCTIONS
// function arrayInTheMiddle(array, a, b) {
//   var newArray = [];
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   for (var i = array.indexOf(a); i <= array.indexOf(b); i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// function estraiArray(array, a, b) {
//   var newArray = [];
//   for (var i = a; i <= b; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }