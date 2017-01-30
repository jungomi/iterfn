/**
 * Creates an iterator which skips values until the predicate becomes false.
 *
 * @param {Iterator} iter An iterator to be skipped ahead.
 *
 * @param {Function} predicate A function that receives the values of the
 * iterator and returns a boolean. As long as it returns true, the values will
 * be ignored, and once it returned false, it stops.
 *
 * @returns {Iterator} An iterator which yields all values after the predicate
 * became false.
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
