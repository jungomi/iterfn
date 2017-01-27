import test from 'ava';
import scan from '../../src/adapters/scan';

test('scan returns an iterator with the accumulated values', t => {
  const iter = scan([1, 2, 3], 1, (acc, x) => acc * x);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 6);
  t.true(iter.next().done);
});
