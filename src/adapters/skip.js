/**
 * Creates an iterator that skips the first n values.
 *
 * @param {Iterator} iter An iterator to skipped ahead.
 *
 * @param {number} n The number of values to be skipped.
 *
 * @returns {Iterator} An iterator which yields every value starting after
 * the first n values.
 */
export default function* skip(iter, n) {
  for (const x of iter) {
    if (n > 0) {
      n -= 1;
      continue;
    }
    yield x;
  }
}
