export function romanToInteger(str) {
    let res = 0;
    let num = {I: 1, V: 5, X: 10, L: 50, C: 100,D: 500, M: 1000};

    for (let i = 0; i < str.length; i++) {

        if (num[str[i]] < num[str[i + 1]]) {
            res = res - num[str[i]];
        } else {
            res = res + num[str[i]];
        }
    }
    
    return res;
}