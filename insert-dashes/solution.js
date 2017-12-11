function insertDash(num) {
  var result = (""+num).replace(/([13579])(?=[13579])/g, '$1-');
  return result;
}