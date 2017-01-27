function* scan(iter, initialValue, func) {
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
    yield acc;
  }
}

export default scan;
