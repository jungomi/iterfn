import test from 'ava';
import filter from '../src/filter';

test('filter returns a new iterator with the filtered values', t => {
  const filterIter = filter([1, 2, 3, 4, 5], x => x % 2 === 0);

  t.is(typeof filterIter.next, 'function');
  t.is(filterIter.next().value, 2);
  t.is(filterIter.next().value, 4);
  t.true(filterIter.next().done);
});

test('filter with wrong parameters returns an iterator that throws', t => {
  const filterNonIterable = filter(1, x => x % 2 === 0);
  const filterNonFunction = filter([1, 2, 3, 4, 5], 9);
  t.throws(() => filterNonIterable.next(), TypeError);
  t.throws(() => filterNonFunction.next(), TypeError);
});
