/**
 * Returns the nth value of an iterable. Like most indexing operations, The
 * count starts from zero (i.e. nth(iter, 0) returns the first value). If n is
 * greater than or equal the number of values in the iterable, it returns
 * undefined.
 *
 * @param {Iterable} iter An iterable to take the nth value from.
 *
 * @param {number} n The index of the value.
 *
 * @returns {Any|undefined} The nth value or undefined if n is greater than or
 * equal to the number of values in the iterable.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * nth(a, 2); // 2
 * nth(a, 5); // undefined
 */
export default function nth(iter, n) {
  for (const val of iter) {
    if (n === 0) {
      return val;
    }
    n -= 1;
  }
}
