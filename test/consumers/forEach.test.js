import test from 'ava';
import forEach from '../../src/consumers/forEach';

test('forEach applies the function to each value', t => {
  function* gen() {
    yield 1;
    yield 5;
    yield 9;
  }
  const expected = [1, 5, 9];

  forEach(gen(), x => t.is(x, expected.shift()));
});
