import operate from './operate';

describe('operators', () => {
  test('1 + 2 = 3', () => {
    const x = 1;
    const y = 2;

    expect(operate(x, y, '+')).toEqual('3');
  });

  test('3 - 2 = 1', () => {
    const x = 3;
    const y = 2;

    expect(operate(x, y, '-')).toEqual('1');
  });

  test('3 x 2 = 6', () => {
    const x = 3;
    const y = 2;

    expect(operate(x, y, 'x')).toEqual('6');
  });

  test('4 ÷ 2 = 2', () => {
    const x = 4;
    const y = 2;

    expect(operate(x, y, '÷')).toEqual('2');
  });

  test('5 % 2 = 1', () => {
    const x = 5;
    const y = 2;

    expect(operate(x, y, '%')).toEqual('1');
  });
});
