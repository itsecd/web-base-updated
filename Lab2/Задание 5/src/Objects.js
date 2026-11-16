export function personUpdate(data) {
	if (data.gender === 'female') {
        delete data.age;
    } 
	else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
	let allKeys = [];
    let keys1 = Object.keys(obj1);
    for (let i = 0; i < keys1.length; i++) {
        allKeys.push(keys1[i]);
    }
    let keys2 = Object.keys(obj2);
    for (let i = 0; i < keys2.length; i++) {
        allKeys.push(keys2[i]);
    }
    let keys3 = Object.keys(obj3);
    for (let i = 0; i < keys3.length; i++) {
        allKeys.push(keys3[i]);
    }
    let uniqueKeys = [];
    for (let i = 0; i < allKeys.length; i++) {
        let currentKey = allKeys[i];
        if (uniqueKeys.indexOf(currentKey) === -1) {
            uniqueKeys.push(currentKey);
        }
    }
    uniqueKeys.sort();

    return uniqueKeys;
}

export function objectClone(obj, count) {
	let clones = [];
    for (let i = 0; i < count; i++) {
        let clone = structuredClone(obj);
        clone.id = i;
        clones.push(clone);
    }
    return clones;
}
