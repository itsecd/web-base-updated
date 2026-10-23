
export function arraySorting(data) {
  const numbers = data
  .split(',')
  .map(Number);

  numbers.sort((a, b) => a - b);

  return numbers.join(',');
}


export function arrayFiltering(data) {
  return data.filter((n) => n <= 100);
}


export function arrayPushing(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }

  return result;
}
