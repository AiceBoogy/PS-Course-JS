const basePassword = "password";

function passwordEncoder(basePassword) {
  const result = basePassword.split("");
  function wordSwap(word, startPos, endPos) {
    result.splice(startPos, 1);
    result.splice(endPos, 0, word);
  }
  wordSwap("w", 4, 2);
  wordSwap("p", 0, 4);
  wordSwap("d", 7, 5);
  wordSwap("s", 2, 6);
  return result;
}

const encodedPassword = passwordEncoder(basePassword);

function checkPassword(encodedPassword, basePassword) {
  function wordSwap(word, startPos, endPos) {
    encodedPassword.splice(startPos, 1);
    encodedPassword.splice(endPos, 0, word);
  }
  wordSwap("s", 6, 2);
  wordSwap("d", 5, 7);
  wordSwap("p", 4, 0);
  wordSwap("w", 2, 4);
  const res = encodedPassword.join("");
  return res === basePassword;
}
console.log(checkPassword(encodedPassword, basePassword));
