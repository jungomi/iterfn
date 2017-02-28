/**
 * Creates an iterator that skips the first n values.
 *
 * @param {Iterable} iter An iterable to be skipped ahead.
 *
 * @param {number} n The number of values to be skipped.
 *
 * @returns {Iterator} An iterator which yields every value starting after
 * the first n values.
 *
 * @example
 * const a = [1, 2, 3, 4];
 *
 * const iter = skip(a, 2);
 *
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: 4, done: false }
 * iter.next(); // { value: undefined, done: false }
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
