function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true
  } else {
    return false
  }
}

function halfSquare(num) {
  return num * num / 2
}

function isLong(str) {
  if (str.length >= 15){
    return true
  } else {
    return false
  }
}

function exclaim(str) {
  if (str.endsWith() !== '!'){
    return str += '!'
  } else {
    return str
  }
}

function countWords() {
}

function containsDigit() {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}