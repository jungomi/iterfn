/**
 * Creates an iterator which ends after the first null or undefined value is
 * encountered. An iterator could potentially yield null or undefined before
 * being done and continue yielding more values afterwards.
 *
 * @param {Iterator} iter An iterator to be fused.
 *
 * @returns {Iterator} A fused iterator.
 */
export default function* fuse(iter) {
  for (const val of iter) {
    if (val === null || val === undefined) {
      return;
    }
    yield val;
  }
}
