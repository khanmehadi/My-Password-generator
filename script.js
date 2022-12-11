// Assignment code here
var passWordBtn = document.getElementById("generate");
var passWordTxt = document.getElementById("password");
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
var mySpecialCharacters = "!@#$%^&*";
var myNumbers = "0123456789";



//Promt user to input number of characters for the password.
const alertMe = function(characterPromt) {
  iterate = 1;
  for (var i=0; i<iterate;) {
    var characterType = prompt(characterPromt);
    if (characterType == "" || characterType == 0 || isNaN(characterType)) {
      alert("Please add a valid value:\nCannot leave empty:\nMust be a number value greater then 0.");
   } else if (!characterType) {
      alert("You've selected NO")
      return;
   } else {
    confirm("You've entered " + characterType);
    i++;
   }
  }
  return parseInt(characterType);
}

//Parse through each character type string and randomly select the specified number of characters.
const parseStrings = function(value, typeCharacters) {
  var numberOfCharacters = " ";
  for (var i=0; i<value; i++) {
    numberOfCharacters += typeCharacters.charAt(Math.floor(Math.random() * typeCharacters.length));
  };
  return numberOfCharacters;
}




function passLength() {  
  //Promt password criteria
  confirm("All Passwrds must be between 8 - 128 characters long:")

  var numUpper = "Would you like to include upper case characters?\nYes: Enter the number of characters:\nNo: Click the cancel button:";
  var numLower = "Would you like to include lower case characters?\nYes: Enter the number of characters:\nNo: Click the cancel button:";
  var numSpecial = "Would you like to include special characters?\nYes: Enter the number of characters:\nNo: Click the cancel button:";
  var numNumbers = "Would you like to include numeric characters?\nYes: Enter the number of characters:\nNo: Click the cancel button:";

  //Promt to input number of characters for each character type
  var numberOfUpper = alertMe(numUpper);
  var numberOfLower = alertMe(numLower);
  var numberOfSpecial = alertMe(numSpecial);
  var numberOfNumbers = alertMe(numNumbers);

  //Parse through each charcter type and randomly select the number of characters specified.
  var parsedLowerCase = parseStrings(numberOfLower, lowerCaseCharacters);
  var parsedUpperCase = parseStrings(numberOfUpper, upperCaseCharacters);
  var pasrseSpecialChars = parseStrings(numberOfSpecial, mySpecialCharacters);
  var parseNumbers = parseStrings(numberOfNumbers, myNumbers);

  //Concatinate new all the new character types generated and remove white space.
  var myPassWord = parsedLowerCase.replace(/\s/g, "") + parsedUpperCase.replace(/\s/g, "") + pasrseSpecialChars.replace(/\s/g, "") + parseNumbers.replace(/\s/g, "");
  
  //Confirm the length of the password 
  if (myPassWord.length < 8) {
      alert("Password is too short\nPassword must be more then 8 characters long");
    } else if (myPassWord.length > 128) {
      alert("Password is too long\nPassword must be less then 128 characters long");
   } else {
      passWordBtn.value = '';
     return passWordTxt.innerHTML = myPassWord;
   }
}


// Listen for Genearte Password button click to execute passLength() function.
passWordBtn.addEventListener("click", () => {
  passLength(); 
})
