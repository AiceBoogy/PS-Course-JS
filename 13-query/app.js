const user = {
  search: "Vasya",
  take: 10,
};

function queryObj(object) {
  return new URLSearchParams(object).toString();
}

console.log(queryObj(user));
