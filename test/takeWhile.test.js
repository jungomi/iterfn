import test from 'ava';
import takeWhile from '../src/takeWhile';

test('takeWhile stops when the predicate returns false', t => {
  const iter = takeWhile([1, 2, 3, 4], x => x < 3);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.true(iter.next().done);
});

test('takeWhile works on infinite iterators', t => {
  function* infinite() {
    let n = 1;
    while (true) {
      yield n;
      n += 1;
    }
  }
  const iter = takeWhile(infinite(), x => x < 3);

  t.is(typeof iter.next, 'function');
  t.is(iter.next().value, 1);
  t.is(iter.next().value, 2);
  t.true(iter.next().done);
});
