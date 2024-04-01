const arr = [1, 2, 10, 2, 8, 3, 15, 4, 5, 6];

function deletCheck(num) {
  return num < 6;
}

function arrFilter(array, fn) {
  const newArray = [];
  for (let element in arr) {
    if (fn(array[element])) {
      newArray.push(array[element]);
    }
  }
  return newArray;
}

filteredArray = arrFilter(arr, deletCheck);
console.log(filteredArray);
