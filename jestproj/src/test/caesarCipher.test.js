import { caesarCipher } from "../functions/caesarCipher";

describe('Testing the caesar cipher function', () => {
  test('abcd to be bcde', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
  })
  
  test('AbCd to be BcDe', () => {
    expect(caesarCipher('AbCd', 1)).toBe('BcDe');
  })

  test('ab cd to be bc de', () => {
    expect(caesarCipher('ab cd', 1)).toBe('bc de');
  })

  test('abcd123 to be bcde123', () => {
    expect(caesarCipher('abcd123', 1)).toBe('bcde123');
  })

  test('Empty space to be Null', () => {
    expect(caesarCipher()).toBeNull();
  })
})