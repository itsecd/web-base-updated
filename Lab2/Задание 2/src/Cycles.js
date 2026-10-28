export function rangeSum(start, end) {
  let sum = 0;

  if (start > end) {
    let a = start;
    start = end;
    end = a;
  }

  for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
          sum += i;
      }
  }
  return sum;
}

export function iterationCount(a) {
  let count = 0;
    
  while (a > 0.1) {
      a = a / 2;
      count++;
  }
  return count;
}

export function symbolsReplace(message) {
  let i = 0;
  let newmas = "";
    
  do {
        
    if (i % 3 == 2) {
      newmas += '_';
    }
    else{
      newmas += message[i];
    }
    i++;
  } while (i < message.length);
    
  return newmas;
}
