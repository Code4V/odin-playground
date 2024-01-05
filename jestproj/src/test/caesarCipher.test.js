import { caesarCipher } from "../functions/caesarCipher";

describe('Testing the caesar cipher function', () => {
  test('abcd to be abcd - shift 0', () => {
    expect(caesarCipher('abcd', 0)).toBe('abcd');
  })

  test('abcd to be bcde', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
  })

  test('abcd to be abcd - shift 26', () => {
    expect(caesarCipher('abcd', 26)).toBe('abcd');
  })

  test('abcd to be efgh - shift 30', () => {
    expect(caesarCipher('abcd', 30)).toBe('efgh');
  })

  test('abcd to be wxyz - shift 48', () => {
    expect(caesarCipher('abcd', 48)).toBe('wxyz');
  })
  
  test('aBcD to be wXyZ - shift 48', () => {
    expect(caesarCipher('aBcD', 48)).toBe('wXyZ');
  })

  test('aBcD to be gHiJ - shift 500', () => {
    expect(caesarCipher('aBcD', 500)).toBe('gHiJ');
  })

  test('aBcD to be pQrS - shift 9999', () => {
    expect(caesarCipher('aBcD', 9999)).toBe('pQrS');
  })

  test('aBcD123123 to be wXyZ123123 - shift 48', () => {
    expect(caesarCipher('aBcD123123', 48)).toBe('wXyZ123123');
  })

  test('aB cD 12 23 to be wX yZ 12 23 - shift 48', () => {
    expect(caesarCipher('aB cD 12 23', 48)).toBe('wX yZ 12 23');
  })

  test('AbCd to be BcDe', () => {
    expect(caesarCipher('AbCd', 1)).toBe('BcDe');
  })

  test('ab cd to be bc de', () => {
    expect(caesarCipher('ab cd', 1)).toBe('bc de');
  })

  test('xyz to be yza', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
  })

  test('XYZ to be YZA', () => {
    expect(caesarCipher('XYZ', 1)).toBe('YZA');
  })

  test('XYZ to be EFG - shift 7', () => {
    expect(caesarCipher('XYZ', 7)).toBe('EFG');
  })

  test('abcd123 to be bcde123', () => {
    expect(caesarCipher('abcd123', 1)).toBe('bcde123');
  })

  test('!@#$%^&@ to be !@#$%^&@', () => {
    expect(caesarCipher('!@#$%^&@', 1)).toBe('!@#$%^&@');
  })

  test('shift parameter not a number to throw an Error', () => {
    expect(caesarCipher('abcdefg', 'asdasd')).toEqual(new Error('Shifts should be a number'));
  })

  test('Empty space to be Null', () => {
    expect(caesarCipher()).toBeNull();
  })
})