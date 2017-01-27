import test from 'ava';
import chain from '../../src/adapters/chain';

test('chain combines iterators correctly', t => {
  function* gen() {
    yield 5;
    yield 6;
  }
  const array1 = [1, 2];
  const array2 = [3, 4];
  const chainThree = chain(array1, array2, gen());

  t.is(chainThree.next().value, 1);
  t.is(chainThree.next().value, 2);
  t.is(chainThree.next().value, 3);
  t.is(chainThree.next().value, 4);
  t.is(chainThree.next().value, 5);
  t.is(chainThree.next().value, 6);
  t.true(chainThree.next().done);
});
