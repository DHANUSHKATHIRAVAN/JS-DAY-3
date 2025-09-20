
var even = [];
var odd = [];
var invalid = [];
function evenOrOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      invalid.push(arr[i]);
    } else if (arr[i] === 0) {
      invalid.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return {
    evenarray : even,
    oddarray : odd,
    invalidarray: invalid
  }
}
console.log(evenOrOdd([1, 2, 3, 4, 5, 0, -5, 6, 7, 8]));
