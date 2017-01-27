import test from 'ava';
import any from '../../src/consumers/any';

test('any is true when the predicate is true for any value', t => {
  t.true(any([1, 2, 3], () => true));
  t.true(any([1, 2, 3], x => x % 2 === 0));
  t.true(any([1, 2, 3], x => x === 3));
});

test('any is false when the predicate is false for all values', t => {
  t.false(any([], () => {}));
  t.false(any([1, 2, 3], () => false));
  t.false(any([1, 2, 3], x => x > 4));
});
