// Assignment code here

function generatePassword() {
  var passwordLength = prompt("how long you want the password 'minimum 8 maximum 128' ");
  var passwordNumbers = confirm("do you want to include numbers");
  var passwordUppercase = confirm("do you want to include uppercase letters");
  var passwordLowercase = confirm("do you want to include lowercase letters");
  var passwordSymbols = confirm("do you want to include symbols");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("It needs to be between 8 and 128")
    return
  }
  if (!passwordNumbers && !passwordUppercase && !passwordLowercase && !passwordSymbols) {
    alert("you're missing one of the needed characters")
    return
  }
  var numbers = "1234567890"
  var upperLetters = "ABCDEF"
  var lowerLetters = "abcdef"
  var symbols = "!@#$%^"
  var selectedCharacters = ""
  var password = ""
  if (passwordNumbers) {
    selectedCharacters += numbers

  }
  if (lowerLetters) {
    selectedCharacters += lowerLetters
  }
  if (upperLetters) {
    selectedCharacters += upperLetters
  }
  if (symbols) {
    selectedCharacters += symbols
  }
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * selectedCharacters.length)
    var character = selectedCharacters[index]
    password += character
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
