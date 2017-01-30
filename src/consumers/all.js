/**
 * Tests if every value of the iterator satisfies the predicate. When all values
 * satisfy the predicate it returns true, otherwise false. Once the predicate
 * returns false for any value, the result will be false no matter what else
 * happens and therefore it stops processing additional values
 * (short-circuiting).
 * An empty iterator returns true.
 *
 * @param {Iterator} iter An iterator to be tested against the predicate.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean.
 *
 * @returns {boolean} Whether all values satisfy the predicate.
 */
export default function all(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return false;
    }
  }
  return true;
}
