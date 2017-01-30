import test from 'ava';
import { isGeneratorFunction, isIterable, isIterator } from '../src/utils';

test('isGeneratorFunction is true for generator functions', t => {
  function* gen() {}
  const obj = {
    * gen() {}
  };

  t.true(isGeneratorFunction(gen));
  t.true(isGeneratorFunction(obj.gen));
});

test('isGeneratorFunction is false for everything else', t => {
  function regular() {}
  const obj = {};
  const num = 1;
  const string = 'string';
  const array = [];

  t.false(isGeneratorFunction(regular));
  t.false(isGeneratorFunction(obj));
  t.false(isGeneratorFunction(num));
  t.false(isGeneratorFunction(string));
  t.false(isGeneratorFunction(array));
});

test('isIterable is true for built-in iterable types', t => {
  const array = [];
  const map = new Map();
  const set = new Set();
  const typedArray = new Int32Array();
  const string = 'string';

  t.true(isIterable(array));
  t.true(isIterable(map));
  t.true(isIterable(set));
  t.true(isIterable(typedArray));
  t.true(isIterable(string));
});

test('isIterable is true for custom iterables', t => {
  const iterable = {
    [Symbol.iterator]: () => {}
  };

  t.true(isIterable(iterable));
});

test('isIterable is false for non-iterables', t => {
  const emptyObj = {};
  const wrongType = {
    [Symbol.iterator]: 'wrong type'
  };

  t.false(isIterable(emptyObj));
  t.false(isIterable(wrongType));
});

test('isIterator is true for iterators', t => {
  const iter = {
    next() {
      return { done: true };
    }
  };

  t.true(isIterator(iter));
});

test('isIterator is false for non-iterators', t => {
  const emptyObj = {};
  const wrongType = {
    next: 'wrong type'
  };

  t.false(isIterator(emptyObj));
  t.false(isIterator(wrongType));
});
