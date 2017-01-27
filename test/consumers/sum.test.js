import test from 'ava';
import sum from '../../src/consumers/sum';

test('sum adds all values of the iterator together', t => {
  t.is(sum([]), 0);
  t.is(sum([1]), 1);
  t.is(sum([1, 2, 3]), 6);
});
