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
var character = lowercaseChar;
  console.log(character);


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
    alert("In the next three screens it would ask you what type of characters you would like to be included in your password. If you choose 'NO' for all of the three option, your password will only generate lowercase letters.");
    }
    return passwordLength;
}
//Determine whether the user wants to include a uppercase characters in the user password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want uppercase letters in your password? (yes or no)");

    if (uppercaseCheck === "yes" || uppercaseCheck ==="Yes" || uppercaseCheck ==="YES" || uppercaseCheck ==="y" || uppercaseCheck ==="Y"){
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

    if (numberCheck === "yes" || numberCheck === "Yes" || numberCheck === "YES" || numberCheck === "Y" || numberCheck === "y"){
      numberCheck = true;
      return numberCheck;
    }else if (numberCheck === "no" || numberCheck === "No" || numberCheck === "NO" || numberCheck === "N" || numberCheck === "n"){
      numberCheck = false;
      return numberCheck;
    }else {
      alert("Please type yes or no ");
      determineNumbers();
    }
    return numberCheck;
  }
//Determine whether the user wants to have a special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want special characters in your password? (yes or no)");

    if (specialCheck === "yes" || specialCheck ==="Yes"|| specialCheck ==="YES" || specialCheck ==="y"|| specialCheck ==="Y"){
      specialCheck = true;
      return specialCheck;
f    }else if (specialCheck === "no" || specialCheck ==="No" || specialCheck ==="NO" || specialCheck ==="n" || specialCheck ==="N"){
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
// if user select uppercase number and special character 
//them it will select character from each string to generate a password for the user
// If the user pick none to all of the option them, they will just get lowercase characters.
if (uppercaseCheck && numberCheck && specialCheck){
  character += uppercaseChar + numberChar + specialChar;
  // if user select uppercase number and special character 
//them it will select character from each string to generate a password for the user
}else if (uppercaseCheck && numberCheck){
  character += uppercaseChar + numberChar;
    // if user select uppercase and special character 
//them it will select from each string from the uppercase and special characters to generate a password for the user
}else if (uppercaseCheck && specialCheck){
  character += uppercaseChar + specialChar;
  // if user select number and special character 
//them it will select from each string from the number and special characters to generate a password for the user
}else if (numberCheck && specialCheck){
  character += numberChar + specialChar;
  // if user select uppercase  
// it will only pick string from the uppercase
}else if (uppercaseCheck){
  character += uppercaseChar;
   // if user select special characters
// it will only pick string from the special characters
}else if (specialCheck){
  character += specialChar;
  // if user select numbers
// it will only pick string from the numbers
}else if(numberCheck){
  character += numberChar;
}
// This connect to the characters that the user slected and generate the length with the slected character pick
console.log(character)
  for(var i = 0; i< passwordLength; i++){
    password += character.charAt(Math.floor(Math.random() * character.length));
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
generateBtn.addEventListener("click", writePassword);
