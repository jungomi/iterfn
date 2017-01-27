import test from 'ava';
import skipWhile from '../../src/adapters/skipWhile';

test('skipWhile yields values after the predicate returns false', t => {
  const iter = skipWhile([1, 2, 3, 4], x => x < 3);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 4);
  t.true(iter.next().done);
});

test('skipWhile does not skip values after the predicate returned false', t => {
  const iter = skipWhile([1, 2, 3, 2, 1], x => x < 3);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 1);
  t.true(iter.next().done);
});
