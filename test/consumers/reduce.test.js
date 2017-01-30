import test from 'ava';
import reduce from '../../src/consumers/reduce';

test('reduce returns the final accumulated value', t => {
  const resultNumber = reduce([1, 2, 3, 4], (acc, x) => acc + x);
  const resultStr = reduce(['hello', 'world'], (acc, x) => `${acc} ${x}`);

  t.is(resultNumber, 10);
  t.deepEqual(resultStr, 'hello world');
});

test('reduce returns the first value when it is the only one', t => {
  const result = reduce([1], (acc, x) => acc + x);

  t.is(result, 1);
});

test('reduce returns undefined when there is no value', t => {
  const result = reduce([], (acc, x) => acc + x);

  t.is(result, undefined);
});

test('reduce uses the initial value when it is supplied', t => {
  const result = reduce([1, 2, 3, 4], (acc, x) => acc + x, 5);

  t.is(result, 15);
});

test('reduce does not apply the function to the first value', t => {
  const result = reduce([2, 3, 4], (acc, x) => acc + x * 2);
  const resultInit = reduce([2, 3, 4], (acc, x) => acc + x * 2, 0);

  t.is(result, 16);
  t.is(resultInit, 18);
});
