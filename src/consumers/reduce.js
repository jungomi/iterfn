/**
 * Applies a function to each value, producing a single, final value. This
 * similar to fold, but uses the first value of the iterator as initial value if
 * no initial value is given and the order of the parameters is swapped to mimic
 * Array.prototype.reduce.
 * Note that the initial value is not run through the function but taken as is.
 *
 * @param {Iterator} iter An iterator to be consumed to create a final value.
 *
 * @param {Function} func A function that receives two arguments, the
 * accumulator and the current iterator value, and returns the new accumulated
 * value.
 *
 * @param {Any} [initialValue] The initial value of the
 * accumulator, when it is not supplied, the first value of the iterator is
 * taken as the initial value instead.
 *
 * @returns {Any|undefined} The final value of the accumulator or undefined when
 * no value is available.
 */
function reduce(iter, func, initialValue) {
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

export default reduce;
