/**
 * Converts an iterable of pairs into two arrays, where each contains the values
 * of the respective position in the pair.
 *
 * @param {Iterable} iter An iterable of pairs to be unzipped.
 *
 * @returns {[Array, Array]} An array containing two arrays where each contains
 * the values of the respective position in the pair of the iterable.
 *
 * @example
 * const a = [[0, 'a'], [1, 'b']];
 *
 * const [left, right] = unzip(a);
 * left;  // [0, 1]
 * right; // ['a', 'b']
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
