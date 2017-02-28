/**
 * Applies a function to each value, producing a single, final value. This is
 * similar to reduce, except that an initial value needs to be supplied.
 *
 * @param {Iterable} iter An iterable to be consumed to create a final value.
 *
 * @param {Any} initialValue The initial value of the accumulator.
 *
 * @param {Function} func A function that receives two arguments, the
 * accumulator and the current iterable value, and returns the new accumulated
 * value.
 *
 * @returns {Any} The final value of the accumulator.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * const sum = fold(a, 0, (acc, x) => acc + x); // 6
 * const sumOffset = fold(a, 10, (acc, x) => acc + x); // 16
 */
export default function fold(iter, initialValue, func) {
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}
