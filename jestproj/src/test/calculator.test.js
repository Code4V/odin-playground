import { calculator } from "../functions/calculator";

describe('Testing calculator', () => {
  const testCase = [1, 123, 5, 61];

  test('zero if no given argument/s', () => {
    expect(calculator().sum()).toBe(0);
  })

  test('Acceptance of an array', () => {
    expect(calculator(testCase).sum()).toBe(
      testCase.reduce((prev, curr) => prev = prev + curr)
    );
  })

  test('addition operation', () => {
    expect(calculator(1, 123, 5, 61).sum()).toBe(
      testCase.reduce((prev, curr) => prev = prev + curr)
    );
  })

  test('subtract operation', () => {
    expect(calculator(1, 123, 5, 61).subtract()).toBe(
      testCase.reduce((prev, curr) => prev = prev - curr)
    );
  })

  test('product operation', () => {
    expect(calculator(1, 123, 5, 61).multiply()).toBe(
      testCase.reduce((prev, curr) => prev = prev * curr)
    );
  })

  test('divide operation', () => {
    expect(calculator(1, 123, 5, 61).divide()).toBe(
      testCase.reduce((prev, curr) => prev = prev / curr)
    );
  })
})