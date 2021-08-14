// the var/containers 
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLeath;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Determine the length of the password for the user
function determineLength(){
  passwordLength = prompt("how many characters long you'd like your password to be between 8-128 characters: ");
    if (isNaN(passwordLength)){
      alert("Please use the number characters between 8-128 instead of letters or nothing.");
      determineLength();  
    }else if (passwordLength<8 || passwordLength>128){
      alert("Password length is to short or to long. Please try picking a number between 8-128 characters.");
      determineLength()
    }else{
    alert("In the next three screens it would ask you what type of characters you would like to be included in your password. If you choose 'NO' for all of the three screens, your password will only generate lowercase letters.");
    }
    return passwordLength;
}
//Determine whether the user wants to include a uppercase characters in the user password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want uppercase letters in your password? (yes or no)");

    if (uppercaseCheck === null){
      alert("Please type yes or no in this question");
      determineUppercase();
    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="Yes" || uppercaseCheck ==="YES" || uppercaseCheck ==="y" || uppercaseCheck ==="Y"){
      uppercaseCheck = true;
      return uppercaseCheck;
    }else if (uppercaseCheck === "no" || uppercaseCheck ==="No" || uppercaseCheck ==="NO" || uppercaseCheck ==="n" || uppercaseCheck ==="N"){
      uppercaseCheck = false;
      return uppercaseCheck;
    }else {
      alert("Please type yes or no in your question");
      determineUppercase();
    }
    return uppercaseCheck;
    
}
//determine whether the user wants to have a numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want numbers in your password? (yes or no)");

    if (numberCheck === null){
      alert("Please type yes or no in this question");
      determineNumbers();
    }else if (numberCheck === "yes" || numberCheck === "Yes" || numberCheck === "YES" || numberCheck === "Yes" || numberCheck === "Yes"){
      numberCheck = true;
      return numberCheck;
    }else if (numberCheck === "no" || numberCheck === "No" || numberCheck === "NO" || numberCheck === "N" || numberCheck === "n"){
      numberCheck = false;
      return numberCheck;
    }else {
      alert("Please type yes or no in this question");
      determineNumbers();
    }
    return numberCheck;
  }
//Determine whether the user wants to have a special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want special characters in your password? (yes or no)");
    if (specialCheck === null){
      alert("Please type yes or no in this question");
      determineSpecial();
    }else if (specialCheck === "yes" || specialCheck ==="Yes"|| specialCheck ==="YES" || specialCheck ==="y"|| specialCheck ==="Y"){
      specialCheck = true;
      return specialCheck;
    }else if (specialCheck === "no" || specialCheck ==="No" || specialCheck ==="NO" || specialCheck ==="n" || specialCheck ==="N"){
      specialCheck = false;
      return specialCheck;
    }else {
      alert("Please type yes or no in this question");
      determineSpecial();
    }
    return specialCheck;
}
 //Generate a password aswell as seeing if the statement true, false from the character that the user pick 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);
var characters = lowercaseChar;
  console.log(characters);
var password = "";
// if user select uppercase number and special character 
//them it will select character from each string to generate a password for the user
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;
  // if user select uppercase number and special character 
//them it will select character from each string to generate a password for the user
}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;
  // if user select number and special character 
//them it will select from each string from the number and special characters to generate a password for the user
}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;
  // if user select uppercase and special character 
//them it will select from each string from the uppercase and special characters to generate a password for the user
}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;
  // if user select uppercase  
// it will only pick string from the uppercase
}else if (uppercaseCheck){
  characters += uppercaseChar;
  // if user select numbers
// it will only pick string from the numbers
}else if(numberCheck){
  characters += numberChar;
  // if user select special characters
// it will only pick string from the special characters
}else if (specialCheck){
  characters += specialChar;
}
// This connect to the characters that the user slected and generate the length with the slected character pick
console.log(characters)
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the input
function writePassword() {
  var passwordGen = "";
  passwordGen = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordGen;
}
function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
