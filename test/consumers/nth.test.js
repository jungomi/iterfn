import test from 'ava';
import nth from '../../src/consumers/nth';

test('nth returns the correct element', t => {
  t.is(nth([], 0), undefined);
  t.is(nth([1, 2, 3], 0), 1);
  t.is(nth([1, 2, 3], 2), 3);
  t.is(nth([1, 2, 3], 3), undefined);
});

test('nth works on infinite iterators', t => {
  function* gen() {
    let i = 0;
    while (true) {
      yield i;
      i += 1;
    }
  }
  t.is(nth(gen(), 0), 0);
  t.is(nth(gen(), 99), 99);
});
