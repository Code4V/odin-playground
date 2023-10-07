const dateSort = require("../operations/dataOperations");

test("Objects should be sorted according to specified category", () => {
  const date = [
    {
      dueDate: new Date().setMonth(11),
      id: 1231,
    },
    { dueDate: new Date().setMonth(12), id: 2314 },
    { dueDate: new Date().setMonth(10), id: 2034 },
  ];
  const dateExpected = [
    {
      dueDate: new Date().setMonth(11),
      id: 1231,
    },
    { dueDate: new Date().setMonth(10), id: 2034 },
    { dueDate: new Date().setMonth(12), id: 2314 },
  ];

  expect(dateSort(date, { category: "id" })).toStrictEqual(dateExpected);
});

test("Numbers should be sorted in ascending order", () => {
  const numTest = [1, 3, 1, 5];

  const numExpect = numTest.sort((a, b) => a - b);

  expect(dateSort(numTest, { category: "TEst" })).toStrictEqual(numExpect);
});
