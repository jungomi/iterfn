import test from 'ava';
import zip from '../../src/adapters/zip';

test('zip combines two iterators into a single one with pairs', t => {
  function* gen() {
    yield 'hello';
    yield 'world';
  }
  const array = [1, 2];
  const zipped = zip(array, gen());

  t.is(typeof zipped.next, 'function');
  t.deepEqual(zipped.next().value, [1, 'hello']);
  t.deepEqual(zipped.next().value, [2, 'world']);
  t.true(zipped.next().done);
});

test('zip stops when one iterator is done', t => {
  function* gen() {
    yield 'hello';
    yield 'world';
  }
  const array = [1, 2, 3, 4];
  const zipped = zip(array, gen());
  const zippedReverse = zip(gen(), array);

  t.is(typeof zipped.next, 'function');
  t.deepEqual(zipped.next().value, [1, 'hello']);
  t.deepEqual(zipped.next().value, [2, 'world']);
  t.true(zipped.next().done);
  t.is(typeof zippedReverse.next, 'function');
  t.deepEqual(zippedReverse.next().value, ['hello', 1]);
  t.deepEqual(zippedReverse.next().value, ['world', 2]);
  t.true(zippedReverse.next().done);
});
