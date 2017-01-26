import { isGeneratorFunction, isIterable } from './utils';

function iter(iterable) {
  if (isIterable(iterable)) {
    return iterable[Symbol.iterator]();
  }
  if (isGeneratorFunction(iterable)) {
    return iterable();
  }

  throw new TypeError('Could not convert to iterator');
}

export default iter;
