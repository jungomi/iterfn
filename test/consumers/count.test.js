import test from 'ava';
import count from '../../src/consumers/count';

test('count returns the number of values in the iterator', t => {
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  t.is(count([]), 0);
  t.is(count([1]), 1);
  t.is(count([1, 2, 3, 4, 5]), 5);
  t.is(count(gen()), 3);
});
