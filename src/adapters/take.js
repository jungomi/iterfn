function* take(iter, n) {
  for (const val of iter) {
    if (n <= 0) {
      return;
    }
    n -= 1;
    yield val;
  }
}

export default take;
