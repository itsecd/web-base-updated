export function arraySorting(str) {
    const numbers = str.split(',').map(Number);
    numbers.sort((a, b) => a - b);
    return numbers.join(',');
}

export function arrayFiltering(arr) {
    return arr.filter(num => num <= 100);
}

export function arrayPushing(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}