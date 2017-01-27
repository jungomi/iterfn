function position(iter, predicate) {
  let index = 0;
  for (const val of iter) {
    if (predicate(val)) {
      return index;
    }
    index += 1;
  }
  return -1;
}

export default position;
