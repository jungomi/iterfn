function reduce(iter, func) {
  iter = iter[Symbol.iterator]();
  const { value: initialValue, done } = iter.next();
  if (done) {
    return;
  }
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}

export default reduce;
