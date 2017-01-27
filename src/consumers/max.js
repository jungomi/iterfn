function max(iter) {
  iter = iter[Symbol.iterator]();
  const { value: initialValue, done } = iter.next();
  if (done) {
    return;
  }
  let maxValue = initialValue;
  for (const val of iter) {
    if (val >= maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}

export default max;
