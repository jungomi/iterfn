import test from 'ava';
import map from '../src/map';

test('map returns a new iterator with the function applied', t => {
  const mapIter = map([1, 5], x => x * 2);

  t.is(typeof mapIter.next, 'function');
  t.is(mapIter.next().value, 2);
  t.is(mapIter.next().value, 10);
  t.true(mapIter.next().done);
});

test('map with wrong parameters returns an iterator that throws', t => {
  const mapNonIterable = map(1, x => x * 2);
  const mapNonFunction = map([1, 5], 9);
  t.throws(() => mapNonIterable.next(), TypeError);
  t.throws(() => mapNonFunction.next(), TypeError);
});
