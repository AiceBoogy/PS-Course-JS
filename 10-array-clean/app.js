const arr = [1, 10, 2, 8, 3, 15, 4, 5, 6];

function deletCheck(num) {
  return num > 5;
}

function delet(array, fn) {
  for (let element in arr) {
    if (fn(array[element])) {
      array.splice(element, 1);
    }
  }
}

delet(arr, deletCheck);
console.log(arr);
