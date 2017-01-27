import test from 'ava';
import enumerate from '../src/enumerate';

test('enumerate returns the values and their index', t => {
  const iter = enumerate(['a', 'b', 'c']);

  t.is(typeof iter.next, 'function');
  t.deepEqual(iter.next().value, [0, 'a']);
  t.deepEqual(iter.next().value, [1, 'b']);
  t.deepEqual(iter.next().value, [2, 'c']);
  t.true(iter.next().done);
});
