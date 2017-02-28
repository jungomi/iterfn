# iterfn

A collection of functions to operate on iterators similar to Rust's [Iterator
trait][iter-trait].

## Usage

```javascript
import iter from 'iterfn';

const sum = iter([1, 2, 3, 4]).sum(); // 10

const doubledIter = iter([1, 2, 3]).map(x => x * 2);
// Iterator needs to be consumed
doubledIter.next(); // { value: 2, done: false }
doubledIter.next(); // { value: 4, done: false }
doubledIter.next(); // { value: 6, done: false }
doubledIter.next(); // { value: undefined, done: true }

const composedIter = iter([1, 2, 3, 4, 5, 6])
  .filter(x => x % 2 === 0)
  .skip(2)
  .chain([7, 8])
  .reverse();
for (const val of composedIter) {
  console.log(val);
}
// Output:
// 8
// 7
// 6

// Any iterable works
const map = new Map();
map.set(1, 1);
map.set(5, 8);
// Sum keys and values of a Map<number, number>
const sum = iter(map).fold(0, (acc, [key, value]) => key + value); // 15

// Generator functions
function* generator() {
  yield 1;
  yield 12;
  yield 5;
}
// Calling the generator function creates an iterable iterator
const count = iter(generator()).count(); // 3
// iter also accepts a generator function directly
const lastSquare = iter(generator).map(x => x * x).last(); // 25
```

### Using functions directly

It is also possible to directly use the functions that are present on the
extended iterators. This removes any overhead of extending the iterators but
requires the user to supply a correct iterable. This also makes chaining more
cumbersome.

```javascript
import { map, filter, sum } from 'iterfn';

const regularSum = sum([1, 2, 3, 4]); // 10
const sumSquaredEven = sum(map(filter([1, 2, 3, 4], x => x % 2 === 0), x => x * x)); // 20

// Step by step
const evenNumbers = filter([1, 2, 3, 4], x => x % 2 === 0); // 2, 4
const squared = map(evenNumbers, x => x * x); // 4, 16
const finalSum = sum(squared); // 20
```

### Infinite iterators

It is possible to operate on infinite iterators, but be aware that consumers
require to fully traverse the iterator unless they are short-circuiting. Also
the adapter `reverse()` requires to fully consume an iterator as well. The
following examples show how you can operate on infinite iterators, which would
not be possible by just creating an array from an iterator. On the other hand
`cycle()` creates an infinite iterator.

```javascript
import iter from 'iterfn';

function* positiveIntegers() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
}

const sumFirstTen = iter(positiveIntegers).take(10).sum(); // 45
// First number that is divisible by 2 and 11
const divisibleByTwoAndEleven = iter(positiveIntegers)
  .find(x => x % 2 === 0 && x % 11 === 0); // 22

// Use the composed iterator directly
const multiplesOfThree = iter(positiveIntegers).map(x => x * 3);
multiplesOfThree.next(); // { value: 3, done: false }
multiplesOfThree.next(); // { value: 6, done: false }

const smallSquares = iter(positiveIntegers)
  .map(x => x * x)
  .takeWhile(x => x < 50)
  .collect(); // [1, 4, 9, 16, 25, 36, 49]
```

### Adapters

An adapter is a function which takes an iterator and returns another iterator.
Two of the most common adapters are `map()` and `filter()`.  In JavaScript these
functions are available for arrays, which return a new array and therefore it is
possible to chain them. All the adapters can be chained as well.

```javascript
import iter from 'iterfn';

const evenNumbers = iter([1, 2, 3, 4]).filter(x => x % 2 === 0);
const doubled = iter([1, 2, 3, 4]).map(x => x * 2);

// Advancing the iterator with next()
evenNumbers.next(); // { value: 2, done: false }
evenNumbers.next(); // { value: 4, done: false }
evenNumbers.next(); // { value: undefined, done: true }

// Using in a for-of loop
for (const num of doubled) {
  console.log(num);
}

// An iterator which will yield the values 4, 8 and 12
const doubledEven = iter([1, 2, 3, 4, 5, 6])
  .filter(x => x % 2 === 0)
  .map(x => x * 2);

```

#### Difference to Array

A notable difference to using arrays, is that iterator adapters create a new
iterator without consuming the values of the composed iterators. This means that
any side effects in the functions will appear for any value at once when the
iterator is being consumed instead of per adapter function. Although such
functions should usually not have any side effects, it is still important to
know the evaluation order.

```javascript
import iter from 'iterfn';

const doubledEven = iter([1, 2, 3])
  .filter(x => {
    console.log(`Iter - filtering ${x}`);
    return x % 2 === 0;
  })
  .map(x => {
    console.log(`Iter - mapping ${x}`);
    return x * 2;
  });

// Consuming the iterator
for (const x of doubledEven) {
  console.log(`Iter - result ${x}`);
}

const array = [1, 2, 3]
  .filter(x => {
    console.log(`Array - filtering ${x}`);
    return x % 2 === 0;
  })
  .map(x => {
    console.log(`Array - mapping ${x}`);
    return x * 2;
  });

for (const x of array) {
  console.log(`Array - result ${x}`);
}
```

Output:

```
Iter - filtering 1
Iter - filtering 2
Iter - mapping 2
Iter - result 4
Iter - filtering 3
Array - filtering 1
Array - filtering 2
Array - filtering 3
Array - mapping 2
Array - result 4
```

***The above code is for illustration purposes, if you would like to debug the
iterator steps you should use inspect() instead of modifying the map or filter
functions directly***.

```javascript
const doubledEvenDebug = iter([1, 2, 3])
  .inspect(x => console.log(`Iter - about to filter ${x}`))
  .filter(x => x % 2 === 0)
  .inspect(x => console.log(`Iter - about to map ${x}`))
  .map(x => x * 2);
```

#### Advancing composed iterators

An iterator can only be used once and advancing a composed iterator also
advances the underlying iterators. It is also possible to advance the underlying
iterators directly, without triggering the composed one. Keep in mind that
arrays are iterable but not iterators, where `[Symbol.iterator]()` creates an
iterator from the array.

```javascript
import iter from 'iterfn';

const arr = [1, 2, 3, 4];
const arrIter = arr[Symbol.iterator]();
const doubledIter = iter(arrIter).map(x => x * 2);

doubledIter.next(); // { value: 2, done: false }
doubledIter.next(); // { value: 4, done: false }
arrIter.next();     // { value: 3, done: false }
doubledIter.next(); // { value: 8, done: false }
doubledIter.next(); // { value: undefined, done: true }
arrIter.next();     // { value: undefined, done: true }
```

### Consumers

A consumer is a function which takes an iterator and consumes it to return
a value. They are the last method called in a chain of iterators. The most
common consumer for arrays is `reduce()` which for instance can be used to sum
all values.

```javascript
import iter from 'iterfn';

const sumReduce = iter([1, 2, 3, 4]).reduce((acc, x) => acc + x); // 10
const sum = iter([1, 2, 3, 4]).sum(); // 10
const sumEven = iter([1, 2, 3, 4]).filter(x => x % 2 === 0).sum(); // 6
const max = iter([9, 2, 13, 4]).max(); // 13
```

Some consumers seem rather useless for arrays, but are very nice to have for
other iterables, that don't have properties like `length`.

```javascript
import iter from 'iterfn';

function* numbers() {
  yield 1;
  yield 12;
  yield 5;
}

const length = iter(numbers).count(); // 3
const second = iter(numbers).nth(1); // 12, index starts at 0
const sum = iter(numbers).sum(); // 18
const last = iter(numbers).last(); // 5
```

#### Collect

`collect()` is a special consumer which creates a collection from an iterator.
By default it creates an array, but it accepts a function that will be used to
create such a collection. An array can easily be created with the spread
operator, without using this function. But it can definitely improve the
readability of a long iterator chain.

```javascript
import iter from 'iterfn';

function* helloWorld() {
  yield 'hello';
  yield ' ';
  yield 'world';
}

const array = iter(helloWorld).collect(); // ['hello', ' ', 'world']

function concatStr(iter) {
  let str = '';
  for (const val of iter) {
    str += val;
  }
  return str;
}
const string = iter(helloWorld).collect(concatStr); // 'hello world'

const longChain = iter(helloWorld)
  .map(x => x.length)
  .filter(x => x === 5)
  .chain([2, 4])
  .reverse()
  .collect(); // [4, 2, 5, 5]

// Not immediately obvious that it creates an array with the iterators values,
// especially when just seeing the end, even without using complex blocks.
const longSpread = [
  ...iter(helloWorld)
    .map(x => x.length)
    .filter(x => x === 5)
    .chain([2, 4])
    .reverse()
]; // [4, 2, 5, 5]
```

[iter-trait]: https://doc.rust-lang.org/std/iter/trait.Iterator.html
