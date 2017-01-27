function* takeWhile(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return;
    }
    yield val;
  }
}

export default takeWhile;
