import { isIterable } from './../utils';

function* flatMap(iterable, mapFunc) {
  for (const val of iterable) {
    if (isIterable(val)) {
      yield* flatMap(val, mapFunc);
    } else {
      yield mapFunc(val);
    }
  }
}

export default flatMap;
