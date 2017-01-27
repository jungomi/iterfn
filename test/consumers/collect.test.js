import test from 'ava';
import collect from '../../src/consumers/collect';

test('collect returns an array with all values of the iterator', t => {
  function* gen() {
    yield 1;
    yield 5;
  }
  const map = new Map();
  map.set('a', 1);
  map.set('b', 5);

  t.deepEqual(collect(gen()), [1, 5]);
  t.deepEqual(collect([1, 5]), [1, 5]);
  t.deepEqual(collect(map), [['a', 1], ['b', 5]]);
});

test('collect returns the custom collection when a function is provided', t => {
  const stringFromIter = iter => {
    let str = '';
    for (const val of iter) {
      str += val;
    }
    return str;
  };
  function* gen() {
    yield 'hello';
    yield ' ';
    yield 'world';
    yield '!';
  }

  t.is(collect(gen(), stringFromIter), 'hello world!');
  t.is(collect([1, 2, 3, 4, 5], stringFromIter), '12345');
});
