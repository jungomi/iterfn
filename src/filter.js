function* filter(iterable, filterFunc) {
  for (const val of iterable) {
    if (filterFunc(val)) {
      yield val;
    }
  }
}

export default filter;
