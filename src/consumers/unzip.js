/**
 * Converts an iterator of pairs into two arrays, where each contains the values
 * of the respective position in the pair.
 *
 * @param {Iterator} iter An iterator of pairs to be unzipped.
 *
 * @returns {[Array, Array]} An array containing two arrays where each contains
 * the values of the respective position in the pair of the iterator.
 */
export default function unzip(iter) {
  const left = [];
  const right = [];
  for (const [l, r] of iter) {
    left.push(l);
    right.push(r);
  }
  return [left, right];
}
