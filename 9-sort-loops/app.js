const arr = [1, 40, -5, 10, 0];

function arraySorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        let b = array[i];
        array[i] = array[j];
        array[j] = b;
      }
    }
  }
}

arraySorting(arr);
console.log(arr);
