function* map(iterable, mapFunc) {
  for (const val of iterable) {
    yield mapFunc(val);
  }
}

export default map;
