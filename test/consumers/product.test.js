import test from 'ava';
import product from '../../src/consumers/product';

test('product multiplies all values of the iterator together', t => {
  t.is(product([]), 1);
  t.is(product([3]), 3);
  t.is(product([1, 2, 3, 4]), 24);
});
