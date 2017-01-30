/**
 * Searches for a value in the iterator that satisfies the predicate. If any of
 * the values satisfies the predicate, the value will be returned, otherwise it
 * returns undefined.
 *
 * @param {Iterator} iter An iterator to search a value in.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean. When it returns true for a value, the value
 * is returned and all further values are ignored.
 *
 * @returns {Any|undefined} The first value which satisfied the predicate or
 * undefined if no value satisfied it.
 */
export default function find(iter, predicate) {
  for (const val of iter) {
    if (predicate(val)) {
      return val;
    }
  }
}
