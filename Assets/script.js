var button = document.getElementById("generate");

button.addEventListener("click", function () {
  console.log("button");

  let confirmUpperCase = confirm(
    "Would you like uppercase letters in your password?"
  ); // true or false

  let confirmLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  ); // true or false

  let confirmSpecialCase = confirm(
    "Would you like special letters and numbers in your password?"
  ); // true or false

  let passNumber = prompt(
    "How many characters would you like in your password?"
  ); //asking for number of characters in your password
  var empty = [];

  if (confirmUpperCase) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  } else confirmUpperCase;
  var upperCase = empty;

  var empty = [];

  if (confirmLowerCase) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else confirmLowerCase;
  var upperCase = empty;

  var empty = [];

  if (confirmSpecialCase) {
    var specialCase = "1234567890!@#$%^&*()_+";
  } else confirmSpecialCase;

  var passCode = upperCase + lowerCase + specialCase;

  console.log(passCode);

  let allPasswordLetters = "";

  for (var i = 1; i <= passNumber; i++) {
    allPasswordLetters =
      allPasswordLetters +
      passCode.charAt(
        Math.floor(Math.random() * Math.floor(passCode.length - 1))
      );
  }
  var empty = {};

  document.getElementById("display").value = allPasswordLetters;
});
