/**
 * Applies a function to each value, producing a single, final value. This is
 * similar to reduce, except that an initial value needs to be supplied.
 *
 * @param {Iterator} iter An iterator to be consumed to create a final value.
 *
 * @param {Any} initialValue The initial value of the accumulator.
 *
 * @param {Function} func A function that receives two arguments, the
 * accumulator and the current iterator value, and returns the new accumulated
 * value.
 *
 * @returns {Any} The final value of the accumulator.
 */
export default function fold(iter, initialValue, func) {
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}
