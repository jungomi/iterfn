/**
 * Returns the minimum value of an iterable. If two values are equally minimum,
 * the first value is returned.
 *
 * @param {Iterable} iter An iterable to find the minimum value.
 *
 * @returns {Any} The minimum value of the iterable.
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
