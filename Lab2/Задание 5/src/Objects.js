export function personUpdate(person) {
    if (person.gender === 'female') {
        delete person.age;
    } else if (person.gender === 'male') {
        if (!('income' in person)) {
            person.income = 100000;
        }
    }
    return person;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = new Set([
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3)
    ]);
    return Array.from(allKeys).sort();
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
