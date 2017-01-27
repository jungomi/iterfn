function min(iter) {
  iter = iter[Symbol.iterator]();
  const { value: initialValue, done } = iter.next();
  if (done) {
    return;
  }
  let minValue = initialValue;
  for (const val of iter) {
    if (val < minValue) {
      minValue = val;
    }
  }
  return minValue;
}

export default min;
