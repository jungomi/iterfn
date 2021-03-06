/**
 * Creates an iterator which yields only the values that satisfy the predicate.
 *
 * @param {Iterable} iterable An iterable to be filtered.
 *
 * @param {Function} filterFunc A function that receives the values of the
 * iterable and returns a boolean. If it returns true, the value is yielded, and
 * if it returns false, it will move to the next value.
 *
 * @returns {Iterator} An iterator which yields only the values that satisfy the
 * predicate.
 *
 * @example
 * const a = [1, 2, 3, 4, 5, 6];
 * const isEven = x => x % 2 === 0;
 *
 * const iter = filter(a, isEven);
 *
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 4, done: false }
 * iter.next(); // { value: 6, done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* filter(iter, filterFunc) {
  for (const val of iter) {
    if (filterFunc(val)) {
      yield val;
    }
  }
}
