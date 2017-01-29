/**
 * Creates an iterator which transforms each value into a new one.
 *
 * @param {Iterator} iterable An iterator to be mapped.
 *
 * @param {Function} mapFunc A function that transforms each value.
 *
 * @returns {Iterator} An iterator which yields the transformed values.
 */
function* map(iterable, mapFunc) {
  for (const val of iterable) {
    yield mapFunc(val);
  }
}

export default map;
