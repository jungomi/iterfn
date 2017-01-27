function* skip(iter, n) {
  for (const x of iter) {
    if (n > 0) {
      n -= 1;
      continue;
    }
    yield x;
  }
}

export default skip;
