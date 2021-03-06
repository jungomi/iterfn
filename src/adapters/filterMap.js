/**
 * Creates an iterator that both filters and maps. When the mapped value is null
 * or undefined, it is skipped, otherwise it will be yielded.
 *
 * @param {Iterable} iter An iterable to be filtered and mapped.
 *
 * @param {Function} func A function that receives the values of the iterable
 * and returns a new value. If it returns null or undefined, it will move to the
 * next value, and if it returns any other value, the returned value is yielded.
 *
 * @returns {Iterator} An iterator which yields the filtered and mapped values.
 *
 * @example
 * const a = [1, 2, 3, 4, 5, 6];
 * const squareOdd = x => {
 *   if (x % 2 === 0) {
 *     return null;
 *   }
 *   return x * x;
 * };
 *
 * const iter = filterMap(a, squareOdd);
 *
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 9, done: false }
 * iter.next(); // { value: 25, done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* filterMap(iter, func) {
  for (const val of iter) {
    const result = func(val);
    if (result !== null && result !== undefined) {
      yield result;
    }
  }
}
