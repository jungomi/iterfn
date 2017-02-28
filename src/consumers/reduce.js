/**
 * Applies a function to each value, producing a single, final value. This
 * similar to fold, but uses the first value of the iterable as initial value if
 * no initial value is given and the order of the parameters is swapped to mimic
 * Array.prototype.reduce.
 * Note that the initial value is not run through the function but taken as is.
 *
 * @param {Iterable} iter An iterable to be consumed to create a final value.
 *
 * @param {Function} func A function that receives two arguments, the
 * accumulator and the current iterable value, and returns the new accumulated
 * value.
 *
 * @param {Any} [initialValue] The initial value of the
 * accumulator, when it is not supplied, the first value of the iterable is
 * taken as the initial value instead.
 *
 * @returns {Any|undefined} The final value of the accumulator or undefined when
 * no value is available.
 *
 * @example
 * const a = [2, 4, 6];
 *
 * reduce(a, (acc, x) => acc + x); // 12
 * reduce(a, (acc, x) => acc + x, 10); // 22
 *
 * // If no initial value is provided, the first value is not built with the
 * // given function, but simply given as the accumulator to the first call.
 * reduce(a, (acc, x) => acc + x * 3) // 32
 * reduce(a, (acc, x) => acc + x * 3, 0) // 36
 */
export default function reduce(iter, func, initialValue) {
  if (initialValue === null || initialValue === undefined) {
    iter = iter[Symbol.iterator]();
    const { value, done } = iter.next();
    if (done) {
      return;
    }
    initialValue = value;
  }
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
  }
  return acc;
}
