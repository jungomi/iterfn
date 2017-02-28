/**
 * Creates an iterator which yields the first n values of the iterable.
 *
 * @param {Iterable} iter An iterable from which n values are taken.
 *
 * @param {number} n The number of values to take from the iterable.
 *
 * @returns {Iterator} An iterator which yields the first n values.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * const iter = take(a, 2);
 *
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: undefined, done: true }
 *
 * @example
 * // Often used for infinite iterators
 * function* naturalNumbers() {
 *   let i = 0;
 *   while (true) {
 *     yield i;
 *     i += 1;
 *   }
 * }
 *
 * const iter = take(naturalNumbers(), 3);
 *
 * iter.next(); // { value: 0, done: false }
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: undefined, done: true }
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
