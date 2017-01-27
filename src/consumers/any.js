function any(iter, predicate) {
  for (const val of iter) {
    if (predicate(val)) {
      return true;
    }
  }
  return false;
}

export default any;
