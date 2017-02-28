/**
 * Creates an iterator which skips values until the predicate becomes false.
 *
 * @param {Iterable} iter An iterable to be skipped ahead.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterable and returns a boolean. As long as it returns true, the values will
 * be ignored, and once it returned false, it stops.
 *
 * @returns {Iterator} An iterator which yields all values after the predicate
 * became false.
 *
 * @example
 * const a = [1, 3, 6, 11, 13, 2, 4];
 *
 * const iter = skipWhile(a, x => x < 10);
 *
 * iter.next(); // { value: 11, done: false }
 * iter.next(); // { value: 13, done: false }
 * // This would be false, but skipWhile already stopped after the first false
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 4, done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* skipWhile(iter, predicate) {
  let skipFinished = false;
  for (const val of iter) {
    if (skipFinished || !predicate(val)) {
      skipFinished = true;
      yield val;
    }
  }
}
