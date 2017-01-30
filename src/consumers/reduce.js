function reduce(iter, func, initialValue) {
  if (initialValue === null || initialValue === undefined) {
    iter = iter[Symbol.iterator]();
    const { value, done } = iter.next();
    if (done) {
      return;
    }
    initialValue = value;
  }
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}

export default reduce;
