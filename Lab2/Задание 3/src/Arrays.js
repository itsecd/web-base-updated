export function arraySorting(data) {
    let num = data.split(",");

    for (let i = 0; i < num.length; i++) {
        num[i] = Number(num[i]);
    }

    num.sort(function(a, b) {
        return a - b;
    });

    return num.join(",");
}

export function arrayFiltering(data) {
    let res = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] <= 100) {
            res.push(data[i]);
        }
    }

    return res;
}

export function arrayPushing(array1, array2) {
    let res = [];

    for (let i = 0; i < 5; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }

    return res;
}