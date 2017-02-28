/**
 * Creates an iterator which yields the values in reverse order. The given
 * iterable needs to be fully consumed before the values can be yielded in
 * reverse, hence it will result in an infinite loop if it is called on an
 * infinite iterator.
 *
 * @param {Iterable} iter An iterable to be reversed.
 *
 * @returns {Iterator} A reversed iterator.
 *
 * @example
 * const a = [1, 2, 3];
 *
 * const iter = reverse(a);
 *
 * iter.next(); // { value: 3, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: undefined, done: false }
 */
export default function* reverse(iter) {
  const values = [];
  for (const val of iter) {
    values.unshift(val);
  }
  yield* values;
}
