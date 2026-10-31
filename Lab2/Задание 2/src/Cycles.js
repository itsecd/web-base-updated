export function rangeSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(num) {
    let count = 0;
    while (num > 0.1) {
        num = num / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(str) {
    let result = '';
    let i = 0;
    do {
        if ((i + 1) % 3 === 0) {
            result += '_';
        } else {
            result += str[i];
        }
        i++;
    } while (i < str.length);
    return result;
}
