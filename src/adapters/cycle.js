function* cycle(iter) {
  const values = [];
  for (const val of iter) {
    values.push(val);
    yield val;
  }
  if (!values.length) {
    return;
  }
  while (true) {
    yield* values;
  }
}

export default cycle;
