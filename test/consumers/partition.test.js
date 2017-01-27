import test from 'ava';
import partition from '../../src/consumers/partition';

test('partition creates two arrays based on the predicate', t => {
  t.deepEqual(partition([1, 2], () => true), [[1, 2], []]);
  t.deepEqual(partition([1, 2], () => false), [[], [1, 2]]);
  t.deepEqual(partition([1, 2, 3, 4], x => x % 2 === 0), [[2, 4], [1, 3]]);
});
