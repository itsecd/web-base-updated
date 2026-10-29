export function rangeSum(start, end) {
    let res = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            res = res + i;
        }
    }

    return res;
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
    let res = "";
    let i = 0;

    do {
        if ((i + 1) % 3 === 0) {
            res = res + "_";
        } else {
            res = res + message.charAt(x);
        }

        i = i + 1;
    } while (i < message.length);

    return res;
}
