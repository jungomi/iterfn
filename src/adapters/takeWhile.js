/**
 * Creates an iterator which yields values while the predicate is true.
 *
 * @param {Iterator} iter An iterator from which values are taken.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean. As long as it returns true, the values will
 * be yielded, and once it returned false, it stops.
 *
 * @returns {Iterator} An iterator which yields values while the predicate is
 * true.
 */
function* takeWhile(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return;
    }
    yield val;
  }
}

export default takeWhile;
