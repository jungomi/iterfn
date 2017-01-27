function count(iter) {
  iter = iter[Symbol.iterator]();
  let i = 0;
  while (!iter.next().done) {
    i += 1;
  }
  return i;
}

export default count;
