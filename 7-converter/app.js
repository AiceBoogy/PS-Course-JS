function currencyConvert(sum, basedСurrency, targetCurrency) {
  let USD = 87;
  let EUR = 95;
  switch (true) {
    case basedСurrency === "RUB" && targetCurrency === "USD":
      return sum / USD;
    case basedСurrency === "RUB" && targetCurrency === "EUR":
      return sum / EUR;
    case basedСurrency === "USD" && targetCurrency === "EUR":
      return sum / (EUR / USD);
    case basedСurrency === "USD" && targetCurrency === "RUB":
      return sum * USD;
    case basedСurrency === "EUR" && targetCurrency === "RUB":
      return sum * EUR;
    case basedСurrency === "EUR" && targetCurrency === "USD":
      return sum * (EUR / USD);
    default:
      return null;
  }
}

console.log(currencyConvert(1000, "EUR", "USD"));
