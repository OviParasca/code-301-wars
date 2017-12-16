function validatePIN (pin) {
  let regEx = /^(?=[0-9]*$)(?:.{4}|.{6})$/;
  return regEx.test(pin);
}