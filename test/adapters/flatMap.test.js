import test from 'ava';
import flatMap from '../../src/adapters/flatMap';

test('flatMap iterates over nested iterators when returning an array', t => {
  const iter = flatMap([1, 2, 3], x => {
    const result = [];
    for (let i = 0; i < x; i++) {
      result.push(x);
    }
    return result;
  });

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 3);
  t.true(iter.next().done);
});

test('flatMap iterates over nested iterators when returning an iterator', t => {
  function* innerIter(x) {
    for (let i = 0; i < x; i++) {
      yield x;
    }
  }
  const iter = flatMap([1, 2, 3], x => innerIter(x));

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 2);
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 3);
  t.is(iter.next().value, 3);
  t.true(iter.next().done);
});
