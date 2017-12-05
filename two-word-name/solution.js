function abbrevName(name) {
  var matches = name.match(/\b(\w)/g); 
  return matches.join('.').toUpperCase();
}