import test from 'ava';
import iter from '../src';

test('iter returns a correct iterator for iterables and generators', t => {
  function* gen() {
    yield 1;
    yield 5;
  }
  const array = [1, 5];
  const genIter = iter(gen);
  const arrayIter = iter(array);

  t.is(typeof genIter.next, 'function');
  t.is(genIter.next().value, 1);
  t.is(genIter.next().value, 5);
  t.true(genIter.next().done);
  t.is(typeof arrayIter.next, 'function');
  t.is(arrayIter.next().value, 1);
  t.is(arrayIter.next().value, 5);
  t.true(arrayIter.next().done);
});

test('iter throws when not passing an iterator', t => {
  const obj = {};
  const num = 2;
  const func = () => {};

  t.throws(() => iter(obj), TypeError);
  t.throws(() => iter(num), TypeError);
  t.throws(() => iter(func), TypeError);
});
