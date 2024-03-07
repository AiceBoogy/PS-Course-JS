const card = "4561-2612-1234-5464";

function luhnAlgorithm(cardNum) {
  cardNum = cardNum.replaceAll("-", "");
  cardNum = cardNum.split("");
  cardNum = cardNum
    .map(Number)
    .map((num, i) => {
      if (i % 2 === 0) {
        return (num *= 2);
      }
      return num;
    })
    .map((num) => {
      if (num > 9) {
        return num - 9;
      }
      return num;
    })
    .reduce((acc, plus) => {
      return (acc += plus);
    });

  if (cardNum % 10 === 0) {
    return true;
  }
  return false;
}

console.log(luhnAlgorithm(card));
