/**
 * Creates an iterator which accumulates a value. This is similar to fold or
 * reduce, but instead of creating a single value, it yields each step of the
 * accumulator, making the last value equivalent to the output of fold or
 * reduce.
 *
 * @param {Iterator} iter An iterator to be scanned.
 *
 * @param {Any} initialValue The initial value of the accumulator.
 *
 * @param {Function} func A function that receives two arguments, the
 * accumulator and the current iterator value, and returns the new accumulated
 * value, which is also yielded.
 *
 * @returns {Iterator} An iterator which yields each step of the accumulator.
 */
function* scan(iter, initialValue, func) {
  let acc = initialValue;
  for (const val of iter) {
    acc = func(acc, val);
    yield acc;
  }
}

export default scan;
