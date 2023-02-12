// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // removed password var from generatePassword since i created new function for passwords to be assigned
  // generatePAssword is now for prompts on screen
   generatePassword();
  var passwordText = document.querySelector("#password");
  // changed password var to randomPassword as it will be the call function with passwords
  var password = randomPassword()
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// adding global variables for passwords
var numbers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"]
var specalCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "|", "~"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// added var for each criteria to be sellected on screen
var promptLength = "";
var confirmNumbers;
var confirmSpecialCharacter;
var confirmLowerCase;
var confirmUpperCase;

function generatePassword(){
    promptLength = (prompt("Choose the length of your password!"));
//  if statement to give back an error message if they have chosen outside the criteria
      if(promptLength <= 7 || promptLength >= 129){
        alert("password length must be between 8-128 letts!")
        promptLength = (prompt("Choose the length of your password"))
      }
        alert("your password will be " + promptLength)
        confirmNumbers = (confirm("Would you like to add numbers?"))
        confirmSpecialCharacter = (confirm("Would you like to add special characters?"))
        confirmLowerCase = (confirm("Would you like to add lower case letters?"))
        confirmUpperCase = (confirm("Would you like to add upper case letters?"))
// if statement incase they chose no criterias
        if (confirmLowerCase === false && confirmNumbers === false && confirmSpecialCharacter === false && confirmUpperCase === false ){
          alert("Please pick atleast one option")
        confirmNumbers = (confirm("Would you like to add numbers?"))
        confirmSpecialCharacter = (confirm("Would you like to add special characters?"))
        confirmLowerCase = (confirm("Would you like to add lower case letters"))
        confirmUpperCase = (confirm("Would you like to add upper case letters"))
        }

}

function randomPassword(){
// created random password if conditional
  var passwordSelection = []
        if(confirmLowerCase ){
        passwordSelection = passwordSelection.concat(lowerCase)
        }
        if (confirmNumbers ){
          passwordSelection = passwordSelection.concat(numbers)
        }
        if(confirmSpecialCharacter ){
          passwordSelection = passwordSelection.concat(specalCharacter)
        }
        if(confirmUpperCase ){
          passwordSelection = passwordSelection.concat(upperCase)
        }

       //created loop for password generator based on users selection
        var randomPassword = ""

        for (var i = 0; i < promptLength; i++){
          randomPassword = randomPassword + passwordSelection[Math.floor(Math.random() * passwordSelection.length)];
        }
        return randomPassword;
}
