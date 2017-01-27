import test from 'ava';
import position from '../../src/consumers/position';

test('position returns the index of the value satisfying the predicate', t => {
  t.is(position([1, 2, 3], () => true), 0);
  t.is(position([1, 2, 3, 4], x => x % 2 === 0), 1);
  t.is(position([1, 2, 3], x => x === 3), 2);
});

test('position returns -1 when no value satisfies the predicate', t => {
  t.is(position([], () => true), -1);
  t.is(position([1, 2, 3], () => false), -1);
  t.is(position([1, 2, 3], x => x > 4), -1);
});
