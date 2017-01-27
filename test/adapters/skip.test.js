import test from 'ava';
import skip from '../../src/adapters/skip';

test('skip starts after the nth value', t => {
  const iter = skip([1, 2, 3, 4], 2);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 4);
  t.true(iter.next().done);
});

test('skip stops when not enough values are available', t => {
  const iter = skip([1, 2, 3, 4], 9);

  t.is(typeof iter.next, 'function');
  t.true(iter.next().done);
});
