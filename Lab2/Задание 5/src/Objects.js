export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    }

    if (data.gender === 'male' && !('income' in data)) {
        data.income = 100000;
    }

    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const fields = new Set([...Object.keys(obj1),...Object.keys(obj2),...Object.keys(obj3)]);

    return [...fields].sort();
}

export function objectClone(obj, count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        const clone = JSON.parse(JSON.stringify(obj));
        clone.id = i;
        result.push(clone);
    }

    return result;
}
