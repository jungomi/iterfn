import chain from './chain';
import enumerate from './enumerate';
import filter from './filter';
import filterMap from './filterMap';
import flatMap from './flatMap';
import fuse from './fuse';
import inspect from './inspect';
import map from './map';
import skip from './skip';
import skipWhile from './skipWhile';
import take from './take';
import takeWhile from './takeWhile';
import zip from './zip';

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
      return extendIterator(chain(this, ...iterables));
    },
    enumerate() {
      return extendIterator(enumerate(this));
    },
    filter(filterFunc) {
      return extendIterator(filter(this, filterFunc));
    },
    filterMap(func) {
      return extendIterator(filterMap(this, func));
    },
    flatMap(mapFunc) {
      return extendIterator(flatMap(this, mapFunc));
    },
    fuse() {
      return extendIterator(fuse(this));
    },
    inspect(func) {
      return extendIterator(inspect(this, func));
    },
    map(mapFunc) {
      return extendIterator(map(this, mapFunc));
    },
    skip(n) {
      return extendIterator(skip(this, n));
    },
    skipWhile(predicate) {
      return extendIterator(skipWhile(this, predicate));
    },
    take(n) {
      return extendIterator(take(this, n));
    },
    takeWhile(predicate) {
      return extendIterator(takeWhile(this, predicate));
    },
    zip(otherIter) {
      return extendIterator(zip(this, otherIter));
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
