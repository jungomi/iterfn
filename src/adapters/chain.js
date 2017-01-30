/**
 * Takes two or more iterators and creates a new iterator over their values in
 * sequence. It will first iterate over the values from the first iterator, then
 * the second and so on.
 *
 * @param {Iterator} ...iterables The iterators that will be chained.
 *
 * @returns {Iterator} A chained iterator.
 */
export default function* chain(...iterables) {
  for (const iter of iterables) {
    yield* iter;
  }
}
