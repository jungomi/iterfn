function* chain(...iterables) {
  for (const iter of iterables) {
    yield* iter;
  }
}

export default chain;
