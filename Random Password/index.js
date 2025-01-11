const password = document.querySelector("#password");
const button = document.querySelector("#button");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "!@#$%^&*";

const allCase = upperCase + lowerCase + numbers + specialChar;

button.addEventListener("click", () => {
  let passwd = "";
  passwd += upperCase[Math.floor(Math.random() * upperCase.length)];
  passwd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwd += numbers[Math.floor(Math.random() * numbers.length)];
  passwd += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (length > passwd.length) {
    passwd += allCase[Math.floor(Math.random() * allCase.length)];
  }
  password.value = passwd;
});



//for copying password from text field
function copyPassword(){
    password.select()
    password.setSelectionRange(0,99999)
    navigator.clipboard.writeText(password.value)
}
