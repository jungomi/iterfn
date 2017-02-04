/**
 * Creates an iterator which ends after the first null or undefined value is
 * encountered. An iterator could potentially yield null or undefined before
 * being done and continue yielding more values afterwards.
 *
 * @param {Iterator} iter An iterator to be fused.
 *
 * @returns {Iterator} A fused iterator.
 *
 * @example
 * // Yields even numbers or null
 * function* alternate() {
 *  let i = 0;
 *  while (true) {
 *    if (i % 2 === 0) {
 *      yield i;
 *    } else {
 *      yield null;
 *    }
 *    i += 1;
 *  }
 * }
 *
 * const iter = alternate();
 *
 * iter.next(); // { value: 0, done: false }
 * iter.next(); // { value: null, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: null, done: false }
 * // Would continue indefinitely
 *
 * const fused = fuse(iter);
 *
 * fused.next(); // { value: 4, done: false }
 * // Stops after it encounters null or undefined
 * fused.next(); // { value: undefined, done: true }
 *
 * // This also ends the original iterator
 * iter.next(); // { value: undefined, done: true }
 */
export default function* fuse(iter) {
  for (const val of iter) {
    if (val === null || val === undefined) {
      return;
    }
    yield val;
  }
}
