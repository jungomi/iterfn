/**
 * Consumes an iterator and returns the last value.
 *
 * @param {Iterator} iter An iterator to be consumed.
 *
 * @returns {Any} The last value of the iterator.
 *
 * @example
 * const a = [1, 2, 3, 4, 5];
 *
 * last(a); // 5
 * last([]); // undefined
 */
export default function last(iter) {
  let value;
  for (const val of iter) {
    value = val;
  }
  return value;
}
