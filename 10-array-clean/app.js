const arr = [1, 2, 10, 2, 8, 3, 15, 4, 5, 6];

let newArray = [];

function deletCheck(num) {
  return num < 6;
}

function arrFilter(array, fn) {
  for (let element in arr) {
    if (fn(array[element])) {
      newArray = [...newArray, array[element]];
    }
  }
}

arrFilter(arr, deletCheck);
console.log(newArray);
