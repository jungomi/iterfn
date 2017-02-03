/**
 * Applies a function to each value of the iterator and consumes it. This has
 * the same effect as simply using a for-of loop, which should be preferred over
 * this.
 *
 * @param {Iterator} iter An iterator to be consumed.
 *
 * @param {Function} func A function that is called with each value.
 *
 * @returns {void}
 */
export default function forEach(iter, func) {
  for (const val of iter) {
    func(val);
  }
}
