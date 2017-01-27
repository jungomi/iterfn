function find(iter, predicate) {
  for (const val of iter) {
    if (predicate(val)) {
      return val;
    }
  }
}

export default find;
