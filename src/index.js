import * as adapters from './adapters';
import * as consumers from './consumers';
import { isGeneratorFunction, isIterable } from './utils';

function iter(iterable) {
  if (isIterable(iterable)) {
    return iterFromIterable(iterable);
  }
  if (isGeneratorFunction(iterable)) {
    return iterFromGenerator(iterable);
  }

  throw new TypeError('Could not convert to iterator');
}

export function extendIterator(iter) {
  return Object.assign(iter, {
    chain(...iterables) {
      return extendIterator(adapters.chain(this, ...iterables));
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
    },
    collect(fromIter) {
      return consumers.collect(this, fromIter);
    },
    count() {
      return consumers.count(this);
    },
    fold(initialValue, func) {
      return consumers.fold(this, initialValue, func);
    },
    last() {
      return consumers.last(this);
    },
    nth(n) {
      return consumers.nth(this, n);
    },
    product() {
      return consumers.product(this);
    },
    reduce(func) {
      return consumers.reduce(this, func);
    },
    sum() {
      return consumers.sum(this);
    }
  });
}

export function iterFromIterable(iterable) {
  return extendIterator(iterable[Symbol.iterator]());
}

export function iterFromGenerator(generator) {
  return extendIterator(generator());
}

export default iter;
