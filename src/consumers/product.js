/**
 * Multiplies all values of the iterable together.
 *
 * @param {Iterable} iter An iterable whose values are multiplied.
 *
 * @returns {number} The result of multiplying all values of the iterable.
 *
 * @example
 * const a = [1, 2, 3, 4];
 *
 * product(a); // 24
 */
export default function product(iter) {
  let result = 1;
  for (const val of iter) {
    result *= val;
  }
  return result;
}
