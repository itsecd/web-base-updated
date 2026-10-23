
export function personUpdate(data) {
  if (data.gender === 'female') {
    delete data.age;
  } else if (data.gender === 'male' && !('income' in data)) {
    data.income = 100000;
  }
  return data;
}


export function objectFieldsList(obj1, obj2, obj3) {
  return Object.keys(obj1)
    .concat(Object.keys(obj2), Object.keys(obj3))
    .sort();

}

export function objectClone(obj, count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const clone = structuredClone(obj);
    clone.id = i;
    result.push(clone);
  }

  return result;
}
