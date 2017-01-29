/**
 * Creates an iterator which works like map, but flattens nested structures.
 * The map function has to return an iterator instead of just a value.
 * Consequently all values of the returned iterators are yielded.
 *
 * @param {Iterator} iterable An iterator to be mapped and flattened.
 *
 * @param {Function} mapFunc A function that returns an iterator for each value.
 * All the values of the returned iterators are yielded.
 *
 * @returns {Iterator} An iterator which yields all values of the mapped
 * iterators.
 */
function* flatMap(iterable, mapFunc) {
  for (const val of iterable) {
    yield* mapFunc(val);
  }
}

export default flatMap;
