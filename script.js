// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Assignment code here
var generatePassword = function () { 
 
 
  // create funcObject object saving properties as functions.
  var passwordInfo = {
    // function to ask user about password criteria
    length: getlength(),
    numbers: getRandomNumbers(),
    specialChars: getRandomSpecialChars(), 
    lowerLetters: getRandomLowerLetters(),
    upperLetters: getRandomUpperLetters()
  }

  // create an empty array for password to store contents of password in string later.
  var passwordArray = [];

  // Used ".concat" method to merge arrays of different choices 
  passwordArray = passwordArray.concat(passwordInfo.numbers, passwordInfo.specialChars, passwordInfo.lowerLetters, passwordInfo.upperLetters); 
  
  // console.log(passwordArray);

  if (passwordArray.length < 1) {
    window.alert("Invalid entry, try again!");    // Set alert if user sets a password length of 0 or under 1.
    return;
  }

  var password = "";    // created empty string for password to be stored

  for(var i = 0; i < passwordInfo.length; i++ ) {
    var ranNum = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[ranNum];
  }
  return password;

  // for every iteration in passwordInfo.length, the password will be updated by a random element from the arrays that were selected as true.
    
      
}


// Functions for getting random criteria (uppercase, lowercase, special characters and numbers)
// User prompt functions below to ask/confirm properties of password
// getLength function
var getlength = function () {
  
  var length = window.prompt("How many characters will your password be? Choose between 8 and 128 characters");
  if(length < 8 || length > 128) {
    window.alert("Invalid entry, please try again!");
    getlength();
  }
  else {
    return length;    
  }
}

// getRandomNumbers function
var getRandomNumbers = function() {
  
  var numbers = window.confirm("Are numbers required in your password? Select Ok for yes, Cancel for No");
  
   switch (numbers) {
    case true:
      var randomNum = "0123456789" 
      numbers = true;
      return randomNum.split(""); // .split method separates the string into an array of strings divided by whatever is in
                                  // the quotation marks
      

    case false:
      numbers = [];
      return numbers; 
  

    default: 
      //  window.alert("You've chosen an incorrect choice, try again.");
       getRandomNumbers(); 
       break;
    }
}

// getRandomSpecialChars function
var getRandomSpecialChars = function() {
  characters = window.confirm("Are special characters required in your password? Select Ok for yes, Cancel for No");
  
  switch (characters) {
    case true:
      var randomSpecChar = "!@#$%^&*+";
      return randomSpecChar.split("");

    case false:
      characters = [];
      return characters;

    default: 
      window.alert("You've chosen an incorrect choice, try again.");
      getRandomSpecialChars(); 
      break;
  }
}

//  get randomLowerLetters function
var getRandomLowerLetters = function() {
  lowerLetters = window.confirm("Are lowercase letters required in your password? Select Ok for yes, Cancel for No");

  switch (lowerLetters) {
    case true:
      var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
      return lowercaseLetters.split("");

    case false:
      lowerLetters =[];
      return lowerLetters; 

    default: 
      window.alert("You've chosen an incorrect choice, try again.");
      getRandomLowerLetters(); 
      break;
  }
}

// getRandomUpperLetters function
var getRandomUpperLetters = function() {
  // Ask user if Uppercase letters should be a part of password. 
  upperLetters = window.confirm("Are uppercase letters required in your password? Select Ok for yes, Cancel for No");
  switch (upperLetters) {
    case true:
      var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      return uppercaseLetters.split("");  
      break;
                                                        
    case false:       
      upperLetters = []; 
      return upperLetters;
                                                  
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




