import test from 'ava';
import take from '../src/take';

test('take returns the correct number of values', t => {
  const iter = take([1, 2, 3, 4], 2);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.true(iter.next().done);
});

test('take stops when no more values are available', t => {
  const iter = take([1, 2], 5);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.true(iter.next().done);
});

test('take works on infinite iterators', t => {
  function* infinite() {
    while (true) {
      yield 1;
    }
  }
  const iter = take(infinite(), 2);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 1);
  t.true(iter.next().done);
});
