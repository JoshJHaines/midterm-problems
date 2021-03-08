function isEvenlyDivisible(num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	} else {
		return false;
	}
}

function halfSquare(num) {
	return (num * num) / 2;
}

function isLong(str) {
	if (str.length >= 15) {
		return true;
	} else {
		return false;
	}
}

//not working, continuing
function exclaim(str) {
	if (str.endsWith("!") !== "!") {
		return (str += "!");
	}
	if (str.endsWith("!!") === "!!") {
		return str.text.slice(0, -1);
	} else {
		return str;
	}
}

function countWords(str) {
	let wordCount = 1;
	for (i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			wordCount += 1;
		}
	}
	return wordCount;
}

function containsDigit(str) {
  if (str.length === 0){
    return false
  }
  
}

function containsLowerCase() {}

function containsUpperCase() {}

function containsNonAlphanumeric() {}

function containsSpace() {}

function digits() {}

function truncate() {}

function isValidPassword() {}

function onlyPunchy() {}

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
};
