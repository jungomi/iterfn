import test from 'ava';
import inspect from '../src/inspect';

test('inspect executes the function and returns the original values', t => {
  const expected = [1, 2, 3];
  const iter = inspect([1, 2, 3], x => t.is(x, expected.shift()));

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 3);
  t.true(iter.next().done);
});
