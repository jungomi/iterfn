function* skipWhile(iter, predicate) {
  let skipFinished = false;
  for (const val of iter) {
    if (skipFinished || !predicate(val)) {
      skipFinished = true;
      yield val;
    }
  }
}

export default skipWhile;
