/**
 * Tests if every value of the iterable satisfies the predicate. When all values
 * satisfy the predicate it returns true, otherwise false. Once the predicate
 * returns false for any value, the result will be false no matter what else
 * happens and therefore it stops processing additional values
 * (short-circuiting).
 * An empty iterable returns true.
 *
 * @param {Iterable} iter An iterable to be tested against the predicate.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterable and returns a boolean.
 *
 * @returns {boolean} Whether all values satisfy the predicate.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * all(a, x => x > 0); // true
 * all(a, x => x < 2); // false
 */
export default function all(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return false;
    }
  }
  return true;
}
