export function arraySorting(data) {
    const numbers = data.split(",").map(Number);

    numbers.sort((a, b) => a - b);

    return numbers.join(",");
}

export function arrayFiltering(data) {
    const result = data.filter(num => num <= 100);

    return result;
}


export function arrayPushing(array1, array2) {
    let result = [];

    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }

    return result;
};
