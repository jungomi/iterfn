import test from 'ava';
import flatMap from '../../src/adapters/flatMap';

test('flatMap iterates over nested iterators', t => {
  const iter = flatMap([[1, [2, 3]], 4], x => x * 2);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 4);
  t.is(iter.next().value, 6);
  t.is(iter.next().value, 8);
  t.true(iter.next().done);
});
