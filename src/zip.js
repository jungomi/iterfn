function* zip(iterable1, iterable2) {
  const iter1 = iterable1[Symbol.iterator]();
  const iter2 = iterable2[Symbol.iterator]();
  while (true) {
    const { value: value1, done: done1 } = iter1.next();
    const { value: value2, done: done2 } = iter2.next();
    if (done1 || done2) {
      return;
    }
    yield [value1, value2];
  }
}

export default zip;
