export function personUpdate(data) {
    if (data.gender === "female") {
        delete data.age;
    }

    if (data.gender === "male") {
        if (!("income" in data)) {
            data.income = 100000;
        }
    }

    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const fields = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3)
    ];

    return [...new Set(fields)].sort();
}

export function objectClone(obj, count) {
    function clone(value) {
        if (value === null || typeof value !== "object") {
            return value;
        }

        if (Array.isArray(value)) {
            return value.map(clone);
        }

        const result = {};

        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                result[key] = clone(value[key]);
            }
        }

        return result;
    }

    const copies = [];

    for (let i = 0; i < count; i++) {
        const newObj = clone(obj);
        newObj.id = i;
        copies.push(newObj);
    }

    return copies;
}
