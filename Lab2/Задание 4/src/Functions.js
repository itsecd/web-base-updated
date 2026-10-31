export function higherThan(num) {
    return function(value) {
        return value > num;
    };
}


export function hasSubstring(substr) {
    return function(text) {
        return text.includes(substr);
    };
}


export function multiply(num) {
    return function(value) {
        return num * value;
    };
}
