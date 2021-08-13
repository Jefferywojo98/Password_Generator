// the var code
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
      alert("Please use the number characters between 8-128 instead of letters.");
      determineLength();  
    }else if (passwordLength<8 || passwordLength>128){
      alert("Password length is to short or to long. Please try picking a number between 8-128 characters.");
      determineLength()
    }else{
    alert("In the next three screens it would ask you what type of characters you would like to be included in your password. If you choose 'NO' for all of the three screens, your password will only generate lowercase letters.");
    }
    return passwordLength;
}
//Determine whether the user wants to include uppercase characters in the user password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want uppercase letters in your password? (yes or no)");

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please type yes or no in this question");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y" || uppercaseCheck ==="Yes" || uppercaseCheck ==="YES"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"  || uppercaseCheck ==="No" || uppercaseCheck ==="NO"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please type yes or no in your question");
      determineUppercase();
    }
    return uppercaseCheck;
}

//determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want numbers in your password? (yes or no)");

    if (numberCheck === null || numberCheck === ""){
      alert("Please type yes or no in this question");
      determineNumbers();
    }else if (numberCheck === "yes" || numberCheck === "y" || numberCheck === "Yes" || numberCheck === "Yes"){
      numberCheck = true;
      return numberCheck;
    }else if (numberCheck === "no" || numberCheck === "n" || numberCheck === "NO" || numberCheck === "No"){
      numberCheck = false;
      return numberCheck;
    }else {
      alert("Please type yes or no in this question");
      determineNumbers();
    }
    return numberCheck;
}

//To determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want special characters in your password? (yes or no)");
    if (specialCheck === null || specialCheck === ""){
      alert("Please type yes or no in this question");
      determineSpecial();
    }else if (specialCheck === "yes" || specialCheck ==="y" || specialCheck ==="Yes"|| specialCheck ==="YES"){
      specialCheck = true;
      return specialCheck;
    }else if (specialCheck === "no" || specialCheck ==="n" || specialCheck ==="No" || specialCheck ==="NO"){
      specialCheck = false;
      return specialCheck;
    }else {
      alert("Please type yes or no in this question");
      determineSpecial();
    }
    return specialCheck;
}

 //Generate a password aswell as seeing if the statement true, false and what character did the user pick 
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
}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;
}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;
}else if (uppercaseCheck){
  characters += uppercaseChar;
}else if(numberCheck){
  characters += numberChar;
}else if (specialCheck){
  characters += specialChar;
}
console.log(characters)
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the input
function writePassword() {
  var passwordgen = "";
  passwordgen = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordgen;
}

function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
