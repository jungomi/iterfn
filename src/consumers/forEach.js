/**
 * Applies a function to each value of the iterable and consumes it. This has
 * the same effect as simply using a for-of loop, which should be preferred over
 * this.
 *
 * @param {Iterable} iter An iterable to be consumed.
 *
 * @param {Function} func A function that is called with each value.
 *
 * @returns {void}
 *
 * @example
 * const a = [1, 2, 3];
 *
 * forEach(a, console.log);
 *
 * @example
 * 1
 * 2
 * 3
 */
export default function forEach(iter, func) {
  for (const val of iter) {
    func(val);
  }
}
