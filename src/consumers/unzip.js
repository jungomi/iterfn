function unzip(iter) {
  const left = [];
  const right = [];
  for (const [l, r] of iter) {
    left.push(l);
    right.push(r);
  }
  return [left, right];
}

export default unzip;
