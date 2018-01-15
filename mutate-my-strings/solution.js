function mutateMyStrings(stringOne, stringTwo) {
  let newString = stringOne;
  let finalString = stringOne+"\n";

  newString.split('').map((element, index) => {
    if (stringOne[index] != stringTwo[index]) {
      newString = newString.substring(0, index) + stringTwo.charAt(index) + newString.substring(index+1);
      finalString += newString+"\n";
    }
    return element;
  });
  
  return finalString;
}