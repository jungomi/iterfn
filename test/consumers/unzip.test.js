import test from 'ava';
import unzip from '../../src/consumers/unzip';

test('unzip creates two arrays from an iterator of pairs', t => {
  const map = new Map();
  map.set('a', 1);
  map.set('b', 5);

  t.deepEqual(unzip([[0, 'a'], [1, 'b']]), [[0, 1], ['a', 'b']]);
  t.deepEqual(unzip(map), [['a', 'b'], [1, 5]]);
});
