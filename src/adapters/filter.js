/**
 * Creates an iterator which yields only the values that satisfy the predicate.
 *
 * @param {Iterator} iterable An iterator to be filtered.
 *
 * @param {Function} filterFunc A function that receives the values of the
 * iterator and returns a boolean. If it returns true, the value is yielded, and
 * if it returns false, it will move to the next value.
 *
 * @returns {Iterator} An iterator which yields only the values that satisfy the
 * predicate.
 */
function* filter(iterable, filterFunc) {
  for (const val of iterable) {
    if (filterFunc(val)) {
      yield val;
    }
  }
}

export default filter;
