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
	numDigits = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === '0' ||
			str[i] === '1' ||
			str[i] === '2' ||
			str[i] === '3' ||
			str[i] === '4' ||
			str[i] === '5' ||
			str[i] === '6' ||
			str[i] === '7' ||
			str[i] === '8' ||
			str[i] === '9'
		) {
			numDigits += 1;
		}
	}
	if (numDigits < 1) {
		return false;
	} else {
		return true;
	}
}


function containsLowerCase(str) {
	numLowers = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === 'a' ||
			str[i] === 'b' ||
			str[i] === 'c' ||
			str[i] === 'd' ||
			str[i] === 'e' ||
			str[i] === 'f' ||
			str[i] === 'g' ||
			str[i] === 'h' ||
			str[i] === 'i' ||
			str[i] === 'j' ||
			str[i] === 'k' ||
			str[i] === 'l' ||
			str[i] === 'm' ||
			str[i] === 'n' ||
			str[i] === 'o' ||
			str[i] === 'p' ||
			str[i] === 'q' ||
			str[i] === 'r' ||
			str[i] === 's' ||
			str[i] === 't' ||
			str[i] === 'u' ||
			str[i] === 'v' ||
			str[i] === 'w' ||
			str[i] === 'x' ||
			str[i] === 'y' ||
			str[i] === 'z'
		) {
			numLowers += 1;
		}
	}
	if (numLowers < 1) {
		return false;
	} else {
		return true;
	}
}

function containsUpperCase(str) {
	numUppers = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === 'A' ||
			str[i] === 'B' ||
			str[i] === 'C' ||
			str[i] === 'D' ||
			str[i] === 'E' ||
			str[i] === 'F' ||
			str[i] === 'G' ||
			str[i] === 'H' ||
			str[i] === 'I' ||
			str[i] === 'J' ||
			str[i] === 'K' ||
			str[i] === 'L' ||
			str[i] === 'M' ||
			str[i] === 'N' ||
			str[i] === 'O' ||
			str[i] === 'P' ||
			str[i] === 'Q' ||
			str[i] === 'R' ||
			str[i] === 'S' ||
			str[i] === 'T' ||
			str[i] === 'U' ||
			str[i] === 'V' ||
			str[i] === 'W' ||
			str[i] === 'X' ||
			str[i] === 'Y' ||
			str[i] === 'Z'
		) {
			numUppers += 1;
		}
	}
	if (numUppers < 1) {
		return false;
	} else {
		return true;
	}
}

function containsNonAlphanumeric() {}

function containsSpace() {}

function digits() {}

function truncate(str) {
	newStr = "";
	if (str.length >= 15) {
		for (i = 0; i <= 7; i++) {
			newStr += str[i];
		}
		newStr;
		newStr += "...";
		return newStr;
	} else {
		return str;
	}
}
{
}

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
