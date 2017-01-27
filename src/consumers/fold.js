function fold(iter, initialValue, func) {
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}

export default fold;
