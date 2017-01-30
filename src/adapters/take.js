/**
 * Creates an iterator which yields the first n values.
 *
 * @param {Iterator} iter An iterator from which n values are taken.
 *
 * @param {number} n The number of values to take from the iterator.
 *
 * @returns {Iterator} An iterator which yields the first n values.
 */
export default function* take(iter, n) {
  for (const val of iter) {
    if (n <= 0) {
      return;
    }
    n -= 1;
    yield val;
  }
}
