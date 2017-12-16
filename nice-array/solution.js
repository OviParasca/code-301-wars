function isNice(arr) {  
  if (arr.length > 0) {
    let counter = 0;
    for (obj in arr) {
      for (obj2 in arr) {
        if ((parseInt(arr[obj2])-1) == parseInt(arr[obj]) || (parseInt(arr[obj2])+1 == parseInt(arr[obj]))) {
          counter++;
          break;
        }
      }
    }
    if (counter == arr.length) {
      return true;
    } 
  }
  return false;
}