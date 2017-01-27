import test from 'ava';
import fuse from '../../src/adapters/fuse';

test('fuse stops when null or undefined is encountered', t => {
  const iterNull = fuse([1, null, 2]);
  const iterUndefined = fuse([1, undefined, 2]);

  t.is(typeof iterNull.next, 'function');
  t.is(iterNull.next().value, 1);
  t.true(iterNull.next().done);
  t.is(typeof iterUndefined.next, 'function');
  t.is(iterUndefined.next().value, 1);
  t.true(iterUndefined.next().done);
});
