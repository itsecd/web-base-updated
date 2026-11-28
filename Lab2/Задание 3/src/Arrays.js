export function arraySorting(data) {
  return data.split(',').map(Number).sort((a, b) => a - b).join(',');
}

export function arrayFiltering(data) {
  return data.filter(a => a <= 100);
}

export function arrayPushing(array1, array2) {
  return array1.reduce((result, element, i) => (result.push(element, array2[i]), result), []);
}


