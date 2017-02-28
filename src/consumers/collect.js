/**
 * Transforms the iterable into a collection. By default an array is constructed
 * unless a transformation function is supplied.
 *
 * @param {Iterable} iter An iterable to be transformed into a collection.
 *
 * @param {Function} [fromIter = Array.from] A function that receives the
 * iterable and returns a collection. When no function is given, it uses
 * Array.from to create an Array.
 *
 * @returns {Any} A collection constructed from the values of the iterable.
 *
 * @example
 * function* helloWorld() {
 *   yield 'hello';
 *   yield ' ';
 *   yield 'world';
 * }
 *
 * collect(helloWorld()); // ['hello', ' ', 'world']
 *
 * // Custom function to create a collection out of an iterable
 * function concatIter(iter) {
 *   let str = '';
 *   for (const val of iter) {
 *     str += val;
 *   }
 *   return str;
 * }
 * const a = [1, 2, 3, 4];
 *
 * collect(helloWorld(), concatIter); // 'hello world'
 * collect(a, concatIter); // '1234'
 */
export default function collect(iter, fromIter = Array.from) {
  return fromIter(iter);
}
