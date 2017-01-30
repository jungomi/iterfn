/**
 * Returns the nth value of an iterator. Like most indexing operations, The
 * count starts from zero (i.e. nth(iter, 0) returns the first value). If n is
 * greater than or equal the number of values in the iterator, it returns
 * undefined.
 *
 * @param {Iterator} iter An iterator to take the nth value from.
 *
 * @param {number} n The index of the value.
 *
 * @returns {Any|undefined} The nth value or undefined if n is greater than or
 * equal to the number of values in the iterator.
 */
export default function nth(iter, n) {
  for (const val of iter) {
    if (n === 0) {
      return val;
    }
    n -= 1;
  }
}
