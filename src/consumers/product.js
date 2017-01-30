/**
 * Multiplies all values of the iterator together.
 *
 * @param {Iterator} iter An iterator whose values are multiplied.
 *
 * @returns {number} The result of multiplying all values of the iterator.
 */
function product(iter) {
  let result = 1;
  for (const val of iter) {
    result *= val;
  }
  return result;
}

export default product;
