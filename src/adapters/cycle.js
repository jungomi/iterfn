/**
 * Repeats an iterator indefinitely. When the iterator is done, it will start
 * again from the beginning.
 *
 * @param {Iterator} iter An iterator to be repeated indefinitely.
 *
 * @returns {Iterator} An infinite iterator.
 */
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
