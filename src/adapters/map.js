/**
 * Creates an iterator which transforms each value into a new one.
 *
 * @param {Iterable} iter An iterable to be mapped.
 *
 * @param {Function} mapFunc A function that transforms each value.
 *
 * @returns {Iterator} An iterator which yields the transformed values.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * const iter = map(a, x => x * 2);
 *
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 4, done: false }
 * iter.next(); // { value: 6, done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* map(iter, mapFunc) {
  for (const val of iter) {
    yield mapFunc(val);
  }
}
