import { calculator } from "../functions/calculator";

describe('Testing calculator', () => {
  const testCase = [1, 123, 5, 61];
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

})