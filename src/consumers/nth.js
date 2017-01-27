function nth(iter, n) {
  for (const val of iter) {
    if (n === 0) {
      return val;
    }
    n -= 1;
  }
}

export default nth;
