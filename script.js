// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Assignment code here
var generatePassword = function () { 
  // var funcArray = [{numbers}, {specialChars}, {lowerLetters}, {upperLetters}];
 
 
  // create passwordInfo object saving properties as functions.
var passwordInfo = {
  // function to ask user about password criteria
  length: window.prompt("How many characters will your password be? Choose between 8 and 128 characters"),
  numbers: getRandomNumbers(),
  specialChars: getRandomSpecialChars(), 
  lowerLetters: getRandomLowerLetters(),
  upperLetters: getRandomUpperLetters()
}

var funcArray = [{getRandomNumbers}, {getRandomSpecialChars}, {getRandomLowerLetters}, {getRandomUpperLetters}];
console.log(funcArray);
// add element using any "getRandom__ " functions and subtracting length 

  var password = "";

 
  // for(var i = 0; i < passwordInfo.length; i++) {
    if (!getRandomNumbers) {
      // funcArray = [{getRandomSpecialChars}, {getRandomLowerLetters}, {getRandomUpperLetters}]
    }
    else if (!getRandomSpecialChars) {

    }
    else if (!getRandomLowerLetters) {

    }
    else if (!getRandomUpperLetters) {

    }
    //password += (Math.floor(Math.random() * Math.floor(funcArray.length - 1)));
    //(random property of passwordInfo as element of an array substituted as a function)
    
  //}


  return password;
}

// https://www.w3schools.com/charsets/ref_html_ascii.asp <-- ASCII code to use String() method .fromCharCode
// This method will produce the characters as needed to be accepted by the browser and javascript.

// Functions for getting random criteria (uppercase, lowercase, special characters and numbers)
var getRandomNumbers = function() {
   //number properties
   var numbers = window.prompt("Are numbers required in your password? Select 1 for yes, 2 for No");
   numbers = parseInt(numbers);
   switch (numbers) {
     case 1:
      var randomNum = String.fromCharCode(Math.floor((Math.random() * 10) + 48));
      // numbers = true;
      return randomNum;
      // return numbers;
      break;
     
      case 2:
      numbers = false;
      return numbers; 
      break;

      default: 
       window.alert("You've chosen an incorrect choice, try again.");
       getRandomNumbers(); 
       break;
    }
}

var getRandomSpecialChars = function() {
  var characters = window.prompt("Are special characters required in your password? Select 1 for yes, 2 for No");
  characters = parseInt(characters);
  switch (characters) {
    case 1:
      var randomSpecChar = String.fromCharCode(Math.floor((Math.random() * 10) + 33));
      return randomSpecChar;
      break;

    case 2:
      return false;
      break;

    default: 
      window.alert("You've chosen an incorrect choice, try again.");
      getRandomSpecialChars(); 
      break;
  }
}


var getRandomLowerLetters = function() {
  var characters = window.prompt("Are lowercase letters required in your password? Select 1 for yes, 2 for No");
  characters = parseInt(characters);
  switch (characters) {
    case 1:
      var lowercaseLetters = String.fromCharCode(Math.floor((Math.random() * 26) + 97));
      return lowercaseLetters;

    case 2:
      return false; 
      break;

    default: 
      window.alert("You've chosen an incorrect choice, try again.");
      getRandomLowerLetters(); 
      break;
  }
}

var getRandomUpperLetters = function() {
  // Ask user if Uppercase letters should be a part of password. 
  var letters = window.prompt("Are uppercase letters required in your password? Select 1 for yes, 2 for No");
  letters = parseInt(letters);
  switch (letters) {
    case 1:
      var uppercaseLetters = String.fromCharCode(Math.floor((Math.random() * 26) + 65));
      return uppercaseLetters;  
      break;
                                                        // If User inputs incorrect answer,
    case 2:                                             // then the getRandomUpperLetters()
      return false;                                     // will have to run again until an
      break;                                            // acceptable input is keyed in.
                                                  
    default: 
      window.alert("You've chosen an incorrect choice, try again.");
      getRandomUpperLetters(); 
      break;
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




