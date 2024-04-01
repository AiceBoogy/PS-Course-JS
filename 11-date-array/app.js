const parserDate = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
];

const correctDate = parserDate
  .map((date) => {
    return date.split(/[/]|-/);
  })
  .filter((date) => {
    return Number(date[0]) > 0 && Number(date[0]) < 31;
  })
  .map((date) => {
    return date.join("-");
  });

console.log(correctDate);
