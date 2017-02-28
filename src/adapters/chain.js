/**
 * Takes two or more iterables and creates an iterator over their values in
 * sequence. It will first iterate over the values from the first iterable, then
 * the second and so on.
 *
 * @param {...Iterable} iters The iterables that will be chained.
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
export default function* chain(...iters) {
  for (const iter of iters) {
    yield* iter;
  }
}
