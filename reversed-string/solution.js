function solution(str) {
  console.log(str); // the raw string
  console.log(str.split("")); // split every character from the string into an array of characters
  console.log(str.split("").reverse()); // reverse that array of characters
  console.log(str.split("").reverse().join("")); // rejoin those elements in the array back into a string

  // 1-line solution :)
  return str.split("").reverse().join("");
}