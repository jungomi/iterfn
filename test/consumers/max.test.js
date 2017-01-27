import test from 'ava';
import max from '../../src/consumers/max';

test('max returns the maximum value in the iterator', t => {
  t.is(max([]), undefined);
  t.is(max([1]), 1);
  t.is(max([1, 2, 3]), 3);
  t.is(max([1, 2, 3.7, 2, 1.3]), 3.7);
});
