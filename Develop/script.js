// The assignment code
var generatebtn = document.querySelector("#generate");
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberchar = "0123456789";
var specialchar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordleath;
var uppercasecheck;
var numbercheck;
var specialcheck;

//Determine the length of the password for the user
function determinelength(){
  passwordlength = prompt("how many characters long you'd like your password to be between 8-128 characters: ");
    if (isNaN(passwordlength)){
      alert("Please use the number characters between 8-128 instead of letters.");
      determineLength();  
    }else if (passwordlength<8 || passwordlength>128){
      alert("Password length is to short or to long. Please try picking a number between 8-128 characters.");
      determineLength()
    }else{
    alert("In the next three screens it would ask you what type of characters you would like to be included in your password. If you choose 'NO' for all of the three screens, your password will only generate lowercase letters.");
    }
    return passwordlength;
}
//Determine whether the user wants to include uppercase characters for the user password
function determineUppercase(){
  uppercasecheck = prompt("Do you want uppercase letters in your password? (yes or no)");

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please type yes or no in this question");
      determineUppercase();

    }else if (uppercasecheck === "yes" || uppercasecheck ==="y" || uppercasecheck ==="Yes" || uppercasecheck ==="YES"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercasecheck === "no" || uppercasecheck ==="n"  || uppercasecheck ==="No" || uppercasecheck ==="NO"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please type yes or no in this question");
      determineUppercase();
    }
    return uppercaseCheck;
}

// determine whether the user wants to include numbers in there password
function determineNumbers(){
  numbercheck = prompt("Do you want numbers in your password? (yes or no)");

    if (numbercheck === null || numbercheck === ""){
      alert("Please type yes or no in this question");
      determineNumbers();
    }else if (numbercheck === "yes" || numbercheck === "y" || numbercheck === "Yes" || numbercheck === "Yes"){
      numberCheck = true;
      return numberCheck;
    }else if (numbercheck === "no" || numbercheck === "n" || numbercheck === "NO" || numbercheck === "No"){
      numberCheck = false;
      return numbercheck;
    }else {
      alert("Please type yes or no in this question");
      determineNumbers();
    }
    return numberCheck;
}

//To determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialcheck = prompt("Do you want special characters in your password? (yes or no)");
    if (specialcheck === null || specialCheck === ""){
      alert("Please type yes or no in this question");
      determinespecial();
    }else if (specialcheck === "yes" || specialcheck ==="y" || specialcheck ==="Yes"|| specialcheck ==="YES"){
      specialcheck = true;
      return specialcheck;
    }else if (specialcheck === "no" || specialcheck ==="n" || specialcheck ==="No" || specialcheck ==="NO"){
      specialCheck = false;
      return specialcheck;
    }else {
      alert("Please type yes or no in this question");
      determineSpecial();
    }
    return specialcheck;
}

 //Generate a password aswell as seeing if the statement true, false and what character did the user pick 
function generatepassword(){
  determinelength(); 
  console.log(passwordlength); 
  determineUppercase(); 
  console.log(uppercasecheck); 
  determineNumbers(); 
  console.log(numbercheck); determineSpecial(); 
  console.log(specialcheck);
  // no matter if the user pick, they will always have lowercase character.
var characters = lowercasechar;
  console.log(characters);
var password = "";
  // if user select uppercase number and special character 
  //then it will select character from each string to generate a password for the user
if (uppercasecheck && numbercheck && specialcheck){
  characters += uppercaseCcar + numberchar + specialchar;
  // if user select uppercase and number 
  //then it will select character from uppercase and number each string to generate a password for the user
}else if (uppercasecheck && numbercheck){
  characters += uppercasechar + numberchar;
  // if user select number and special character 
  //then it will select character from the number and special character string to generate a password for the user
}else if (numbercheck && specialcheck){
  characters += numberchar + specialchar;
  // if user select uppercase and special character 
  //then it will select character from the uppercase and special character string to generate a password for the user
}else if (uppercasecheck && specialcheck){
  characters += uppercasechar + specialchar;
  // if user uppercase and special character 
  //then it will select character from uppercase and special character string to generate a password for the user
}else if (uppercasecheck){
  characters += uppercasechar;
  // if user just pick uppercase 
  //then it will select character from uppercase string to generate a password for the user
}else if(numbercheck){
  characters += numberchar;
  // if user just pick  special
  //then it will select character from uppercase string to generate a password for the user
}else if (specialcheck){
  characters += specialchar;
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
  var passwordText = document.queryselector("#password");
  passwordText.value = passwordgen;
}

function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);