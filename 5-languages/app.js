let userLang = navigator.language;

switch (userLang) {
  case "ru":
    console.log("Привет!");
    break;
  case "de":
    console.log("Gutten tag!");
    break;
  default:
    console.log("Hello!");
}
