function* inspect(iter, func) {
  for (const val of iter) {
    func(val);
    yield val;
  }
}

export default inspect;
