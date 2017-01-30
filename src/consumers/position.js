/**
 * Searches for a value in the iterator that satisfies the predicate and returns
 * its index. If no value satisfies the predicate, -1 is returned.
 *
 * @param {Iterator} iter An iterator to search a value in.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean. When it returns true for a value, its index
 * is returned and all further values are ignored.
 *
 * @returns {number|undefined} The index of the first value which satisfied the
 * predicate or -1 if no value satisfied it.
 */
export default function position(iter, predicate) {
  let index = 0;
  for (const val of iter) {
    if (predicate(val)) {
      return index;
    }
    index += 1;
  }
  return -1;
}
