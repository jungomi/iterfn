const Generator = function* () {}.constructor;

/**
 * Checks whether the given object is a generator function.
 *
 * @param {Object} obj An object to be checked.
 *
 * @returns {boolean} Whether the object is a generator function.
 */
export function isGeneratorFunction(obj) {
  return obj instanceof Generator;
}

/**
 * Checks whether the given object is iterable.
 *
 * @param {Object} obj An object to be checked.
 *
 * @returns {boolean} Whether the object is iterable.
 */
export function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

/**
 * Checks whether the given objet is an iterator.
 *
 * @param {Object} obj An object to be checked.
 *
 * @returns {boolean} Whether the object is an iterator.
 */
export function isIterator(obj) {
  return typeof obj.next === 'function';
}
