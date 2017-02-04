/**
 * Sums all values of the iterator.
 *
 * @param {Iterator} iter An iterator whose values are added together.
 *
 * @returns {number} The sum of all values of the iterator.
 *
 * @example
 * const a = [1, 2, 3, 4];
 *
 * sum(a); // 10
 */
export default function sum(iter) {
  let result = 0;
  for (const val of iter) {
    result += val;
  }
  return result;
}
