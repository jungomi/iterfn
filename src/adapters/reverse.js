/**
 * Creates an iterator which yields the values in reverse order. The original
 * iterator needs to be fully consumed before the values can be yielded in
 * reverse, hence it will result in an infinite loop if it is called on an
 * infinite iterator.
 *
 * @param {Iterator} iter An iterator to be reversed.
 *
 * @returns {Iterator} A reversed iterator.
 */
export default function* reverse(iter) {
  const values = [];
  for (const val of iter) {
    values.unshift(val);
  }
  yield* values;
}
