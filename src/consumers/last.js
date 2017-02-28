/**
 * Consumes an iterable and returns the last value.
 *
 * @param {Iterable} iter An iterable to be consumed.
 *
 * @returns {Any} The last value of the iterable.
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
