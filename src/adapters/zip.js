/**
 * Creates an iterator which yields a pair of values that correspond to a value
 * from the first and the second iterator, and stops when one of the two
 * iterators is done.
 *
 * @param {Iterator} iterable1 An iterator which provides the first value in the
 * pair of values.
 *
 * @param {Iterator} iterable2 An iterator which provides the second value in
 * the pair of values.
 *
 * @returns {Iterator} An iterator which yields a pair of values from the two
 * iterators.
 *
 * @example
 * const a1 = [1, 2, 3];
 * const a2 = [4, 5, 6];
 *
 * const iter = zip(a1, a2);
 *
 * iter.next(); // { value: [1, 4], done: false }
 * iter.next(); // { value: [2, 5], done: false }
 * iter.next(); // { value: [3, 6], done: false }
 * iter.next(); // { value: undefined, done: true }
 *
 * @example
 * // This can be used to zip an infinite iterator to a finite one
 * function* naturalNumbers() {
 *   let i = 0;
 *   while (true) {
 *     yield i;
 *     i += 1;
 *   }
 * }
 * const a = ['a', 'b', 'c'];
 *
 * const iter = zip(naturalNumbers(), a);
 *
 * iter.next(); // { value: [0, 'a'], done: false }
 * iter.next(); // { value: [1, 'b'], done: false }
 * iter.next(); // { value: [2, 'c'], done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* zip(iterable1, iterable2) {
  const iter1 = iterable1[Symbol.iterator]();
  const iter2 = iterable2[Symbol.iterator]();
  while (true) {
    const { value: value1, done: done1 } = iter1.next();
    const { value: value2, done: done2 } = iter2.next();
    if (done1 || done2) {
      return;
    }
    yield [value1, value2];
  }
}
