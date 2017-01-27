import test from 'ava';
import fold from '../../src/consumers/fold';

test('fold returns the final accumulated value', t => {
  const resultNumber = fold([1, 2, 3, 4], 10, (acc, x) => acc + x);
  const resultArray = fold(['one', 'two', '!'], [], (acc, x) => [x, ...acc]);

  t.is(resultNumber, 20);
  t.deepEqual(resultArray, ['!', 'two', 'one']);
});
