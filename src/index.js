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
    },
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
    reduce(func) {
      return consumers.reduce(this, func);
    },
    sum() {
      return consumers.sum(this);
    },
    unzip() {
      return consumers.unzip(this);
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
