import chain from './chain';
import filter from './filter';
import filterMap from './filterMap';
import map from './map';
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
    filter(filterFunc) {
      return extendIterator(filter(this, filterFunc));
    },
    filterMap(func) {
      return extendIterator(filterMap(this, func));
    },
    map(mapFunc) {
      return extendIterator(extendIterator(map(this, mapFunc)));
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
