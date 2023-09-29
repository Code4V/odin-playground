const dateSort = require("../operations/dataOperations");

const sum = (...data) => {
  const res = data.reduce((prevData, currData) => {
    return prevData + currData;
  });

  console.log(res);

  return res;
};

test("2 + 2 + 5 should be 9", () => {
  expect(sum(2, 2, 5)).toBe(9);
});

test("2 should be 2", () => {
  expect(sum(2)).toBe(2);
});

test("1000.1 + 1 should be 1001 NOT 1001.1", () => {
  expect(sum(1000.1, 1)).not.toBe(1001);
});

test("Should be sorted properly", () => {
  const date = [
    {
      dueDate: new Date().setMonth(11),
    },
    { dueDate: new Date().setMonth(12) },
    { dueDate: new Date().setMonth(10) },
  ];
  const dateExpected = [
    {
      dueDate: new Date().setMonth(10),
    },
    { dueDate: new Date().setMonth(11) },
    { dueDate: new Date().setMonth(12) },
  ];

  expect(dateSort(date)).toStrictEqual(dateExpected);
});
