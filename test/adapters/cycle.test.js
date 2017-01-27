import test from 'ava';
import cycle from '../../src/adapters/cycle';

test('cycle repeats an iterator indefinitely', t => {
  const iter = cycle([1, 2, 3]);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 3);
  const { value, done } = iter.next();
  t.false(done);
  t.is(value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 1);
});

test('cycle finishes when the iterator is empty', t => {
  const iter = cycle([]);

  t.is(typeof iter.next, 'function');
  t.true(iter.next().done);
});
