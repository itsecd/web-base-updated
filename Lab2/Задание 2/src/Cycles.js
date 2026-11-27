export function rangeSum(start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a /= 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    if (!message) return message;

    let result = "";
    let i = 0;

    do {
        if ((i + 1) % 3 === 0) {
            result += "_";
        } 
        else {
            result += message[i];
        }
        i++;
    } while (i < message.length);

    return result;
}
