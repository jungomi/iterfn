/**
 * Creates an iterator which gives the current index as well as the value. The
 * index starts at 0.
 *
 * @param {Iterator} iter An iterator to be enumerated.
 *
 * @returns {Iterator} An iterator which yields pairs of index and value.
 */
export default function* enumerate(iter) {
  let n = 0;
  for (const val of iter) {
    yield [n, val];
    n += 1;
  }
}
