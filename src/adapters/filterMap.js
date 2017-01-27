function* filterMap(iter, func) {
  for (const val of iter) {
    const result = func(val);
    if (result !== null && result !== undefined) {
      yield result;
    }
  }
}

export default filterMap;
