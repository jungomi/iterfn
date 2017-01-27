function* enumerate(iter) {
  let n = 0;
  for (const val of iter) {
    yield [n, val];
    n += 1;
  }
}

export default enumerate;
