/**
 * Tests if any value of the iterator satisfies the predicate. When any value
 * satisfies the predicate it returns true, otherwise false. Once the predicate
 * returns true for any value, the result will be true no matter what else
 * happens and therefore it stops processing additional values
 * (short-circuiting).
 * An empty iterator returns false.
 *
 * @param {Iterator} iter An iterator to be testes against the predicate.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean.
 *
 * @returns {boolean} Whether any value satisfies the predicate.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * any(a, x => x > 0); // true
 * any(a, x => x > 5); // false
 */
export default function any(iter, predicate) {
  for (const val of iter) {
    if (predicate(val)) {
      return true;
    }
  }
  return false;
}
