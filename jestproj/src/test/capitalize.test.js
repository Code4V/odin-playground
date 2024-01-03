import capitalize from './../functions/capitalize';

describe('words must be capitalized', () => {
  test('test to be Test', () => {
    expect(capitalize('test')).toBe('Test');
  })

  test('Test to be Test', () => {
    expect(capitalize('Test')).toBe('Test');
  })

  test('Antagonizing to be Antagonizing', () => {
    expect(capitalize('Antagonizing')).toBe('Antagonizing');
  })

  test('tEST to be TEST', () => {
    expect(capitalize('tEST')).toBe('TEST');
  })
})