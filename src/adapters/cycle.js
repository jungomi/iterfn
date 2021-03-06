/**
 * Repeats an iterable indefinitely. When the iterable is done, it will start
 * again from the beginning.
 *
 * @param {Iterable} iter An iterable to be repeated indefinitely.
 *
 * @returns {Iterator} An infinite iterator.
 *
 * @example
 * const a = [1, 2];
 *
 * const iter = cycle(a);
 *
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 1, done: false }
 * iter.next(); // { value: 2, done: false }
 * iter.next(); // { value: 1, done: false }
 * // etc.
 */
export default function* cycle(iter) {
  const values = [];
  for (const val of iter) {
    values.push(val);
    yield val;
  }
  if (!values.length) {
    return;
  }
  while (true) {
    yield* values;
  }
}
