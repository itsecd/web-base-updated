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
    let fields = [];

    let objects = [obj1, obj2, obj3];

    for (let i = 0; i < objects.length; i++) {
        let keys = Object.keys(objects[i]);

        for (let j = 0; j < keys.length; j++) {
            if (!fields.includes(keys[j])) {
                fields.push(keys[j]);
            }
        }
    }

    return fields.sort();
}

export function objectClone(obj, count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        let copy = structuredClone(obj);
        copy.id = i;
        result.push(copy);
    }

    return result;
}