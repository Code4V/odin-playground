import { analyzeArray } from "../functions/analyzeArray";

describe('Testing analyzeArray', () => {
  test('Check if result match from Odin Project', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })
})