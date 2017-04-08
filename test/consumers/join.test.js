import test from 'ava';
import join from '../../src/consumers/join';

test('join combines the string values with the default separator', t => {
  t.is(join([]), '');
  t.is(join(['hello']), 'hello');
  t.is(join(['hello', 'world', 99]), 'hello,world,99');
});

test('join combines the string values with the provided separator', t => {
  t.is(join([], '=='), '');
  t.is(join(['hello'], '=='), 'hello');
  t.is(join(['hello', 'world', 99], '=='), 'hello==world==99');
});

test('join uses converts the values to a string', t => {
  const customToString = {
    toString() {
      return 'custom toString';
    }
  };
  const arr = [5, { name: 'custom object' }, [1, 2], customToString];
  const expected = '5 [object Object] 1,2 custom toString';

  t.is(join(arr, ' '), expected);
});
