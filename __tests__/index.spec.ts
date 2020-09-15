import parse from '../src/';

describe('byte-parser', () => {
  test('正常用法', () => {
    expect(parse('100')).toBe(100);
    expect(parse('100b')).toBe(100);
    expect(parse('100 b')).toBe(100);
    expect(parse('10.1 b')).toBe(10.1);

    expect(parse('10.1 kb')).toBe(10.1 * 1024);
    expect(parse('10.1 KB')).toBe(10.1 * 1024);

    expect(parse('10.1 kb', 1000)).toBe(10.1 * 1000);

    expect(parse('1.2 mb')).toBe(1.2 * 1024 * 1024);
    expect(parse('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parse('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parse('1.2 Gb')).toBe(1.2 * 1024 * 1024 * 1024);

    expect(parse('1.2 Tb')).toBe(1.2 * 1024 * 1024 * 1024 * 1024);
    expect(parse('1.2 Pb')).toBe(1.2 * 1024 * 1024 * 1024 * 1024 * 1024);
    expect(parse('1.2 Eb')).toBe(1.2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024);
    expect(parse('1.2 Zb')).toBe(1.2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024);
    expect(parse('1.2 Yb')).toBe(1.2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024);

    expect(parse('1.2 Yb', 1)).toBe(1.2);
  });

  test('异常用法', () => {
    expect(() => {
      parse('1a.2 mb');
    }).toThrow(`invalid byte string '1a.2 mb'!`);
  });

  test('额外用法', () => {
    expect(parse('10.1 k')).toBe(10.1 * 1024);
    expect(parse('10.1 g')).toBe(10.1 * 1024 * 1024 * 1024);
    expect(parse('10.1 y')).toBe(10.1 * Math.pow(1024, 8));
  });
});
