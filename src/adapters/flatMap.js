/**
 * Creates an iterator which works like map, but flattens nested structures.
 * The map function has to return an iterable instead of just a value.
 * Consequently all values of the returned iterables are yielded.
 *
 * @param {Iterable} iterable An iterable to be mapped and flattened.
 *
 * @param {Function} mapFunc A function that returns an iterable for each value.
 * All the values of the returned iterables are yielded.
 *
 * @returns {Iterator} An iterator which yields all values of the mapped
 * iterables.
 *
 * @example
 * function* valNtimes(val, n) {
 *   for (let i = 0; i < n; i++) {
 *     yield val;
 *   }
 * }
 * const a = [1, 2, 3];
 *
 * const iter = flatMap(a, x => valNtimes(x, x));
 *
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: undefined, done: true }
 *
 * @example
 * const strings = ['abc', 'xyz'];
 *
 * // Strings are also iterable and therefore valid return values
 * const iter = flatMap(strings, s => s);
 *
 * iter.next(); // { value: 'a', done: false }
 * iter.next(); // { value: 'b', done: false }
 * iter.next(); // { value: 'c', done: false }
 * iter.next(); // { value: 'x', done: false }
 * iter.next(); // { value: 'y', done: false }
 * iter.next(); // { value: 'z', done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* flatMap(iter, mapFunc) {
  for (const val of iter) {
    yield* mapFunc(val);
  }
}
