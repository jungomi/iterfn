import * as adapters from './adapters';
import * as consumers from './consumers';
import { isGeneratorFunction, isIterable, isIterator } from './utils';

export * from './adapters';
export * from './consumers';

const adapterExtension = {
  chain(...iterables) {
    return extendIterator(adapters.chain(this, ...iterables));
  },
  cycle() {
    return extendIterator(adapters.cycle(this));
  },
  enumerate() {
    return extendIterator(adapters.enumerate(this));
  },
  filter(filterFunc) {
    return extendIterator(adapters.filter(this, filterFunc));
  },
  filterMap(func) {
    return extendIterator(adapters.filterMap(this, func));
  },
  flatMap(mapFunc) {
    return extendIterator(adapters.flatMap(this, mapFunc));
  },
  fuse() {
    return extendIterator(adapters.fuse(this));
  },
  inspect(func) {
    return extendIterator(adapters.inspect(this, func));
  },
  map(mapFunc) {
    return extendIterator(adapters.map(this, mapFunc));
  },
  reverse() {
    return extendIterator(adapters.reverse(this));
  },
  scan(initialValue, func) {
    return extendIterator(adapters.scan(this, initialValue, func));
  },
  skip(n) {
    return extendIterator(adapters.skip(this, n));
  },
  skipWhile(predicate) {
    return extendIterator(adapters.skipWhile(this, predicate));
  },
  take(n) {
    return extendIterator(adapters.take(this, n));
  },
  takeWhile(predicate) {
    return extendIterator(adapters.takeWhile(this, predicate));
  },
  zip(otherIter) {
    return extendIterator(adapters.zip(this, otherIter));
  }
};
const consumerExtension = {
  all(predicate) {
    return consumers.all(this, predicate);
  },
  any(predicate) {
    return consumers.any(this, predicate);
  },
  collect(fromIter) {
    return consumers.collect(this, fromIter);
  },
  count() {
    return consumers.count(this);
  },
  find(predicate) {
    return consumers.find(this, predicate);
  },
  forEach(func) {
    return consumers.forEach(this, func);
  },
  fold(initialValue, func) {
    return consumers.fold(this, initialValue, func);
  },
  last() {
    return consumers.last(this);
  },
  max() {
    return consumers.max(this);
  },
  min() {
    return consumers.min(this);
  },
  nth(n) {
    return consumers.nth(this, n);
  },
  partition(predicate) {
    return consumers.partition(this, predicate);
  },
  position(predicate) {
    return consumers.position(this, predicate);
  },
  product() {
    return consumers.product(this);
  },
  reduce(func, initialValue) {
    return consumers.reduce(this, func, initialValue);
  },
  sum() {
    return consumers.sum(this);
  },
  unzip() {
    return consumers.unzip(this);
  }
};

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
  return Object.assign(iter, adapterExtension, consumerExtension);
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
