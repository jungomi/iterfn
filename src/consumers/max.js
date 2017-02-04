/**
 * Returns the maximum value of an iterator. If two values are equally maximum,
 * the last value is returned.
 *
 * @param {Iterator} iter An iterator to find the maximum value.
 *
 * @returns {Any} The maximum value of the iterator.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * max(a); // 3
 * max([]); // undefined
 */
export default function max(iter) {
  iter = iter[Symbol.iterator]();
  const { value: initialValue, done } = iter.next();
  if (done) {
    return;
  }
  let maxValue = initialValue;
  for (const val of iter) {
    if (val >= maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}
