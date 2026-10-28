export function romanToInteger(str) {
    let result = 0;
    let Numbers = {I: 1, V: 5, X: 10, L: 50, C: 100,D: 500, M: 1000};

    for (let i = 0; i < str.length; i++) {
        if (Numbers[str[i]] < Numbers[str[i + 1]]) {
            result = result - Numbers[str[i]];
        } else {
            result = result + Numbers[str[i]];
        }
    }
    return result;
}