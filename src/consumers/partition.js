/**
 * Creates two arrays, where the first array contains all values for which the
 * predicate is true and the second contains all values for which it is false.
 *
 * @param {Iterator} iter An iterator to be partitioned.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean. If it returns true, the value goes into the
 * first array and if it returns false, the value goes into the second array.
 *
 * @returns {[Array, Array]} An array containing two arrays where the first one
 * contains values for which the predicate is true and the second contains all
 * values for which it is false.
 *
 * @example
 * const a = [1, 2, 3, 4, 5];
 * const isEven = x => x % 2 === 0;
 *
 * const [even, odd] = partition(a, isEven);
 * even; // [2, 4]
 * odd;  // [1, 3, 5]
 */
export default function partition(iter, predicate) {
  const left = [];
  const right = [];
  for (const val of iter) {
    if (predicate(val)) {
      left.push(val);
    } else {
      right.push(val);
    }
  }
  return [left, right];
}
