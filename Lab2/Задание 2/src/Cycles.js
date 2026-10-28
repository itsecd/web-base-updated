export function rangeSum(start, end) {
    let result = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result = result + i;
        }
    }

    return result;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a = a / 2;
        count = count + 1;
    }

    return count;
}

export function symbolsReplace(message) {
    let result = "";
    let x = 0;

    do {
        if ((x + 1) % 3 === 0) {
            result = result + "_";
        } else {
            result = result + message.charAt(x);
        }

        x = x + 1;
    } while (x < message.length);

    return result;
}
