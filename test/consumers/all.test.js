import test from 'ava';
import all from '../../src/consumers/all';

test('all is true when the predicate is true for all values', t => {
  t.true(all([], () => {}));
  t.true(all([1, 2, 3], () => true));
  t.true(all([1, 2, 3], x => x < 10));
});

test('all is false when the predicate is false for any value', t => {
  t.false(all([1, 2, 3], () => false));
  t.false(all([1, 2, 3], x => x > 2));
  t.false(all([1, 2, 3], x => x > 10));
});
