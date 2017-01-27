function* reverse(iter) {
  const values = [];
  for (const val of iter) {
    values.unshift(val);
  }
  yield* values;
}

export default reverse;
