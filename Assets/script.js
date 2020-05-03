var button = document.getElementById("generate");

button.addEventListener("click", function () {
  console.log("functioncheck");

  let confirmUpperCase = confirm(
    "Would you like UPPERCASE letters in your password?"
  ); // true or false

  let confirmLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  ); // true or false

  let confirmSpecialCase = confirm(
    "Would you like $PECI@L letter$ and NUM8ER5 in your password?"
  ); // true or false

  let passNumber = prompt(
    "How MANY characters would you like in your password? *Please select a number between 8-128*"
  ); //asking for number of characters in your password

  if (passNumber < 8 || passNumber > 128 || isNaN(passNumber)) {
    alert(
      "Your selections didn't meet the minimum requirements for a secure password!"
    );
  }

  var empty = [];

  if (confirmUpperCase) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  } else var upperCase = empty;

  if (confirmLowerCase) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else var lowerCase = empty;

  if (confirmSpecialCase) {
    var specialCase = "1234567890!@#$%^&*()_+";
  } else var specialCase = empty;

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
  if (passNumber < 8 || passNumber > 128 || isNaN(passNumber)) {
    document.getElementById("display").value =
      "Sorry, Your selections didn't meet the minimum requirements for a secure password. Please try again!";
  } else document.getElementById("display").value = allPasswordLetters;
});
