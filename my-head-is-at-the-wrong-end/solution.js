
function fixTheMeerkat(arr) {
  let tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.unshift(arr[i]);
  }
  return tempArr;
}