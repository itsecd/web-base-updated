export function rangeSum(start, end) {
  let result = 0;
  let i = 0;

  for (i >= start ; i <= end ; i++) {
    if (i % 2 == 0) {
      result += i;
    }
    else {
      continue;
    }
  }

  return result;
}

export function iterationCount(a) {
  let iter = 0;

  while (a > 0.1) {
    a /= 2;
    iter += 1;
    }

    return iter;
}

export function symbolsReplace(message) {
  let i = 0;
  let result = "";

  do {
    if (i%3 == 2) {
      result += "_";
    }
    else {
      result += message[i]
    }
    i ++;
  } while (i < message.length);

  return result;
}