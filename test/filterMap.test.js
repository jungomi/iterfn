import test from 'ava';
import filterMap from '../src/filterMap';

test('filterMap returns mapped and filtered values', t => {
  const func = x => {
    if (x % 2 === 0) {
      return x * 2;
    }
    return null;
  };
  const iter = filterMap([1, 2, 3, 4, 5], func);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 4);
  t.is(iter.next().value, 8);
  t.true(iter.next().done);
});

test('filterMap ignores null and undefined values', t => {
  const iterNull = filterMap([1, 2], () => null);
  const iterUndefined = filterMap([1, 2], () => undefined);

  t.is(typeof iterNull.next, 'function');
  t.true(iterNull.next().done);
  t.is(typeof iterUndefined.next, 'function');
  t.true(iterUndefined.next().done);
});
