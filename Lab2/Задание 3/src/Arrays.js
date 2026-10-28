export function arraySorting(data) {
    let numbers = data.split(",");

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
    }

    numbers.sort(function(a, b) {
        return a - b;
    });

    return numbers.join(",");
}

export function arrayFiltering(data) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] <= 100) {
            result.push(data[i]);
        }
    }

    return result;
}

export function arrayPushing(array1, array2) {
    let result = [];

    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }

    return result;
}