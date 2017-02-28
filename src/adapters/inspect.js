/**
 * Creates an iterator which calls the given function with each value before
 * passing the value on. When chaining a lot of iterables it might be useful to
 * check out what's happening with the values. This is intended for debugging
 * purposes.
 *
 * @param {Iterable} iter An iterable to be inspected.
 *
 * @param {Function} func A function that is called with each value.
 *
 * @returns {Iterator} An iterator which calls a function before passing the
 * value on.
 *
 * @example
 * const a = [1, 2, 4, 3];
 *
 * const sum1 = iter(a)
 *   .filter(x => x % 2 === 0)
 *   .fold(0, (sum, i) => sum + i);
 *
 * // Could be helpful to see what values make it through the chain
 * // Just add inspect() between the steps
 * const sum2 = iter(a)
 *   .inspect(x => console.log(`about to filter: ${x}`))
 *   .filter(x => x % 2 === 0)
 *   .inspect(x => console.log(`made it through filter: ${x}`))
 *   .fold(0, (sum, i) => sum + i);
 *
 * @example
 * about to filter: 1
 * about to filter: 2
 * made it through filter: 2
 * about to filter: 4
 * made it through filter: 4
 * about to filter: 3
 */
export default function* inspect(iter, func) {
  for (const val of iter) {
    func(val);
    yield val;
  }
}
