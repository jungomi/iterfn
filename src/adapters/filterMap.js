/**
 * Creates an iterator that both filters and maps. When the mapped value is null
 * or undefined, it is skipped, otherwise it will be yielded.
 *
 * @param {Iterator} iter An iterator to be filtered and mapped.
 *
 * @param {Function} func A function that receives the values of the iterator
 * and returns a new value. If it returns null or undefined, it will move to the
 * next value, and if it returns any other value, the returned value is yielded.
 *
 * @returns {Iterator} An iterator which yields the filtered and mapped values.
 */
export default function* filterMap(iter, func) {
  for (const val of iter) {
    const result = func(val);
    if (result !== null && result !== undefined) {
      yield result;
    }
  }
}
