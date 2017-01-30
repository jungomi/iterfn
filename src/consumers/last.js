/**
 * Consumes an iterator and returns the last value.
 *
 * @param {Iterator} iter An iterator to be consumed.
 *
 * @returns {Any} The last value of the iterator.
 */
export default function last(iter) {
  let value;
  for (const val of iter) {
    value = val;
  }
  return value;
}
