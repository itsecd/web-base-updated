export function rangeSum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    // Цикл for для суммы четных чисел
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(num) {
    let count = 0;

    // Цикл while для деления пополам
    while (num > 0.1) {
        num = num / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(text) {
    let arr = text.split('');
    let i = 2; // индекс третьего символа (начинаем с 0)

    // Цикл do while для замены каждого третьего символа
    if (arr.length >= 3) {
        do {
            arr[i] = '_';
            i += 3; // прыгаем через 3 символа
        } while (i < arr.length);
    }

    return arr.join('');
}