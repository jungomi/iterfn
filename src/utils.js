const Generator = function* () {}.constructor;

export function isGeneratorFunction(obj) {
  return obj instanceof Generator;
}

export function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}
