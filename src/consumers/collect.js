/**
 * Transforms the iterator into a collection. By default an array is constructed
 * unless a transformation function is supplied.
 *
 * @param {Iterator} iter An iterator to be transformed into a collection.
 *
 * @param {Function} [fromIter = Array.from] A function that receives the
 * iterator and returns a collection. When no function is given, it uses
 * Array.from to create an Array.
 *
 * @returns {Any} A collection constructed from the values of the iterator.
 */
function collect(iter, fromIter = Array.from) {
  return fromIter(iter);
}

export default collect;
