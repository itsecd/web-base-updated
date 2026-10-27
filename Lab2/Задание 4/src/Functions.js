export function higherThan(num) {
    return function (item) {
        return item > num;
    };
}

export function hasSubstring(substr) {
    return function (str) {
        return str.includes(substr);
    };
}

export function multiply(a) {
    return function (b) {
        return a * b;
    };
}