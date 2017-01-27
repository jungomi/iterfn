import test from 'ava';
import last from '../../src/consumers/last';

test('last returns the last value in the iterator', t => {
  function* gen() {
    yield 'first';
    yield 'second';
    yield 'last';
  }
  t.is(last([]), undefined);
  t.is(last([1]), 1);
  t.is(last([1, 2, 3, 4, 5]), 5);
  t.is(last(gen()), 'last');
});
