import test from 'ava';
import min from '../../src/consumers/min';

test('min returns the minimum value in the iterator', t => {
  t.is(min([]), undefined);
  t.is(min([1]), 1);
  t.is(min([1, 2, 3]), 1);
  t.is(min([9, 2.1, 3.7, 2.1, 12]), 2.1);
});
