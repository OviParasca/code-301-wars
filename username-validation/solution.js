function capitalize(s) {
  let finalArr = [];
  for (i = 0; i < 2; i++) {
    let tempStr = s;
    for (j = 0; j < s.length; j++) {
     if (i ==0 && j%2 == 0) {
         tempStr = tempStr.substr(0, j) + tempStr[j].toUpperCase() + tempStr.substr(j + 1);
     } else if (i == 1 && j%2 != 0) {
         tempStr = tempStr.substr(0, j) + tempStr[j].toUpperCase() + tempStr.substr(j + 1);
     }
    }
    finalArr.push(tempStr);
  }  
  return finalArr;
};