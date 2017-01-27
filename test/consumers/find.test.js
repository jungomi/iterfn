import test from 'ava';
import find from '../../src/consumers/find';

test('find returns the first value that satisfies the predicate', t => {
  t.is(find([1, 2, 3], () => true), 1);
  t.is(find([1, 2, 3, 4], x => x % 2 === 0), 2);
  t.is(find([1, 2, 3], x => x === 3), 3);
});

test('find returns undefined when no value satisfies the predicate', t => {
  t.is(find([], () => true), undefined);
  t.is(find([1, 2, 3], () => false), undefined);
  t.is(find([1, 2, 3], x => x > 4), undefined);
});
