function all(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return false;
    }
  }
  return true;
}

export default all;
