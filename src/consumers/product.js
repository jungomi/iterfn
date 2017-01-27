function product(iter) {
  let result = 1;
  for (const val of iter) {
    result *= val;
  }
  return result;
}

export default product;
