function partition(iter, predicate) {
  const left = [];
  const right = [];
  for (const val of iter) {
    if (predicate(val)) {
      left.push(val);
    } else {
      right.push(val);
    }
  }
  return [left, right];
}

export default partition;
