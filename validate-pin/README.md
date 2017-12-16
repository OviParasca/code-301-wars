# code-301-wars
Code Fellows 301n9

Problem Domain -
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false


Link to problem on [Code Wars Kata - Validate Pin](https://www.codewars.com/kata/regex-validate-pin-code/javascript)

Solution -
I decided the simplest solution is to use Regular Expression to check if the pin meets the requirements.