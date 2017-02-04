/**
 * Consumes an iterator, counting the number of iterations and returning it.
 * As the iterator needs to be fully consumed, it will result in an infinite
 * loop if is is called on an infinite iterator.
 *
 * @param {Iterator} iter An iterator to be counted.
 *
 * @returns {number} The number of iterations.
 *
 * @example
 * const a = [1, 2, 3, 4, 5];
 *
 * count(a); // 5
 */
export default function count(iter) {
  iter = iter[Symbol.iterator]();
  let i = 0;
  while (!iter.next().done) {
    i += 1;
  }
  return i;
}
