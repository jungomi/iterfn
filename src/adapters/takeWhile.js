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
 *
 * @example
 * const a = [1, 3, 6, 11, 13, 2, 4];
 *
 * const iter = takeWhile(a, x => x < 10);
 *
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: 6, done: false }
 * iter.next(); // { value: undefined, done: true }
 * // There are more values below 10 but takeWhile stops after the first false
 */
export default function* takeWhile(iter, predicate) {
  for (const val of iter) {
    if (!predicate(val)) {
      return;
    }
    yield val;
  }
}
