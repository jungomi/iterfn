function* fuse(iter) {
  for (const val of iter) {
    if (val === null || val === undefined) {
      return;
    }
    yield val;
  }
}

export default fuse;
