/**
 * Joins all values of the iterable into a string separated with the provided
 * separator. This will automatically convert the values to a string.
 * The default separator is ','.
 *
 * @param {Iterable} iter An iterable whose values are joined.
 *
 * @param {string} [separator = ','] The separator used between the values.
 *
 * @returns {string} The joined string.
 *
 * @example
 * const customToString = {
 *   toString() {
 *     return 'custom toString';
 *   }
 * };
 * const a = ['hello', 99, [1, 2], {}, customToString];
 *
 * join(a); // 'hello,99,1,2,[object Object],custom toString'
 * join(a, ' - '); // 'hello - 99 - 1,2 - [object Object] - custom toString'
 */
export default function join(iter, separator = ',') {
  let result = '';
  iter = iter[Symbol.iterator]();
  const { value, done } = iter.next();
  if (done) {
    return result;
  }
  result += value;
  for (const val of iter) {
    result += separator;
    result += val;
  }
  return result;
}
