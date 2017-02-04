/**
 * Returns the minimum value of an iterator. If two values are equally minimum,
 * the first value is returned.
 *
 * @param {Iterator} iter An iterator to find the minimum value.
 *
 * @returns {Any} The minimum value of the iterator.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * min(a); // 1
 * min([]); // undefined
 */
export default function min(iter) {
  iter = iter[Symbol.iterator]();
  const { value: initialValue, done } = iter.next();
  if (done) {
    return;
  }
  let minValue = initialValue;
  for (const val of iter) {
    if (val < minValue) {
      minValue = val;
    }
  }
  return minValue;
}
