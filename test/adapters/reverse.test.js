import test from 'ava';
import reverse from '../../src/adapters/reverse';

test('reverse changes the direction of the iterator', t => {
  function* gen() {
    yield 'world';
    yield 'hello';
  }
  const iterArray = reverse([1, 2, 3]);
  const iterGen = reverse(gen());

  t.is(typeof iterArray.next, 'function');
  t.is(iterArray.next().value, 3);
  t.is(iterArray.next().value, 2);
  t.is(iterArray.next().value, 1);
  t.true(iterArray.next().done);
  t.is(typeof iterGen.next, 'function');
  t.is(iterGen.next().value, 'hello');
  t.is(iterGen.next().value, 'world');
  t.true(iterGen.next().done);
});
