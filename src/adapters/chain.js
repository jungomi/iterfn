/**
 * Takes two or more iterators and creates a new iterator over their values in
 * sequence. It will first iterate over the values from the first iterator, then
 * the second and so on.
 *
 * @param {...Iterator} iterables The iterators that will be chained.
 *
 * @returns {Iterator} A chained iterator.
 *
 * @example
 * const a1 = [1, 2];
 * const a2 = [3, 4];
 *
 * const iter = chain(a1, a2);
 *
 * iter.next(); // { value: 1, done: false };
 * iter.next(); // { value: 2, done: false };
 * iter.next(); // { value: 3, done: false };
 * iter.next(); // { value: 4, done: false };
 * iter.next(); // { value: undefined, done: true };
 */
export default function* chain(...iterables) {
  for (const iter of iterables) {
    yield* iter;
  }
}
