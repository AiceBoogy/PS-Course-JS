const addressLat = 14;
const addressLong = 10;
const positionLat = 2;
const positionLong = 5;

console.log(
  `Расстояние от текущего местоположения до наазначения: ${Math.sqrt(
    Math.pow(addressLat - positionLat, 2) +
      Math.pow(addressLong - positionLong, 2)
  )}`
);
