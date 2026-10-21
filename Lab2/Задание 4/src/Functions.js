export function higherThan(num) {
	return function(item) {
        return item > num;
    };
}

export function hasSubstring(substr) {
	return function(str) {
        return str.includes(substr);
    };
}

export function multiply(num) {
	return function(nextNum) {
        let result = num * nextNum;
        return result;
    };
}
