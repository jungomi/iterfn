import * as adapters from './adapters';
import * as consumers from './consumers';
import { isGeneratorFunction, isIterable, isIterator } from './utils';

export * from './adapters';
export * from './consumers';

// All functions as methods with the current iterator as first argument
const iterMethods = {};
for (const key of Object.keys(adapters)) {
  iterMethods[key] = function(...args) {
    return extendIterator(adapters[key](this, ...args));
  };
}
for (const key of Object.keys(consumers)) {
  iterMethods[key] = function(...args) {
    return consumers[key](this, ...args);
  };
}

/**
 * Turns an iterable object, iterator object or a generator function into an
 * iterator that is also iterable and adds methods to easily operate on the
 * values. These methods can be chained until a consumer is called.
 *
 * @param {Iterable|Iterator|Generator} iterable An iterable object, iterator
 * object or generator function that can be turned into an iterator.
 *
 * @throws {TypeError} Throws when the input cannot be converted to an iterator.
 *
 * @returns {Iterator} An iterable iterator with additional methods to operate
 * on its values.
 */
export default function iter(iterable) {
  if (isIterable(iterable)) {
    return iterFromIterable(iterable);
  }
  if (isGeneratorFunction(iterable)) {
    return iterFromGenerator(iterable);
  }
  if (isIterator(iterable)) {
    return iterFromIterator(iterable);
  }

  throw new TypeError('Could not convert to iterator');
}

/**
 * Adds methods that call the respective functions on the iterator which can be
 * chained as long as the functions return another iterator.
 *
 * @param {Iterator} iter An iterator that gets extended.
 *
 * @returns {Iterator} The extended iterator.
 */
export function extendIterator(iter) {
  return Object.assign(iter, iterMethods);
}

/**
 * Turns an iterable object into an iterator and adds methods to easily operate
 * on the values.
 *
 * @param {Iterable} iterable An iterable object that can be turned into an
 * iterator.
 *
 * @returns {Iterator} An iterator with additional methods to operate on its
 * values.
 */
export function iterFromIterable(iterable) {
  return extendIterator(iterable[Symbol.iterator]());
}

/**
 * Turns a generator function into an iterator and adds methods to easily
 * operate on the values.
 *
 * @param {Generator} generator A generator function that return an iterator.
 *
 * @returns {Iterator} An iterator with additional methods to operate on its
 * values.
 */
export function iterFromGenerator(generator) {
  return extendIterator(generator());
}

/**
 * Turns an iterator object into an iterable iterator and adds methods to easily
 * operate on the values. Usually an iterator is iterable as well, but it is
 * not a requirement.
 *
 * @param {Iterator} iterator An iterator object to be turned into an iterable
 * iterator.
 *
 * @returns {Iterator} An iterator with additional methods to operate on its
 * values.
 */
export function iterFromIterator(iterator) {
  if (!isIterable(iterator)) {
    iterator[Symbol.iterator] = function() {
      return this;
    };
  }
  return extendIterator(iterator);
}
