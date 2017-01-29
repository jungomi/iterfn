/**
 * Creates an iterator which calls the given function with each value before
 * passing the value on. When chaining a lot of iterators it might be useful to
 * check out what's happening with the values. This is intended for debugging
 * purposes.
 *
 * @param {Iterator} iter An iterator to be inspected.
 *
 * @param {Function} func A function that is called with each value.
 *
 * @returns {Iterator} An iterator which calls a function before passing the
 * value on.
 */
function* inspect(iter, func) {
  for (const val of iter) {
    func(val);
    yield val;
  }
}

export default inspect;
