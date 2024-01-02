import { jest } from '@jest/globals'
import capitalize from './../functions/capitalize';

describe('words must be capitalized', () => {
  test('test to be Test', () => {
    expect(capitalize('test')).toBe('Test');
  })
})