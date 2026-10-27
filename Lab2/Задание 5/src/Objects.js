export function personUpdate(person) {
    if (person.gender === 'female') {
        delete person.age;
    } else if (person.gender === 'male') {
        if (person.income === undefined) {
            person.income = 100000; 
        }
    }
    return person;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3)
    ];
    return [...new Set(allKeys)].sort();
}

export function objectClone(obj, count) {
    const clones = [];
    
    for (let i = 0; i < count; i++) {
        const clone = structuredClone(obj);
        clone.id = i; 
        clones.push(clone);
    }
    
    return clones;
}