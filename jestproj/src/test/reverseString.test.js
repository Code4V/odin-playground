import reverseString from "../functions/reverseString";

describe('testing the reverse string', () => {
  test('"test" must be "tset"', () => {
    expect(reverseString('test')).toBe('tset');
  })

  test('"test ing" must be "gni tset"', () => {
    expect(reverseString('test ing')).toBe('gni tset');
  })
})