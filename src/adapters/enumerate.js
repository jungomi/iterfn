/**
 * Creates an iterator which gives the current index as well as the value. The
 * index starts at 0.
 *
 * @param {Iterable} iter An iterable to be enumerated.
 *
 * @returns {Iterator} An iterator which yields pairs of index and value.
 *
 * @example
 * const a = ['a', 'b', 'c'];
 *
 * const iter = enumerate(a);
 *
 * iter.next(); // { value: [0, 'a'], done: false }
 * iter.next(); // { value: [1, 'b'], done: false }
 * iter.next(); // { value: [2, 'c'], done: false }
 * iter.next(); // { value: undefined, done: true }
 */
export default function* enumerate(iter) {
  let n = 0;
  for (const val of iter) {
    yield [n, val];
    n += 1;
  }
}
