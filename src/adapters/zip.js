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
