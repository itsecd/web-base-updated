export function arraySorting(data) {
  return data.split(",").map(Number).sort((a, b) => a - b).join(",");
}

export function arrayFiltering(data) {
  return data.filter(n => n < 100);
}

export function arrayPushing(array1, array2) {
  let array3 = [];

  for (let i = 0; i <= 4; i++) {
    array3.push(array1[i]);
    array3.push(array2[i]);
  }

  return array3;
}