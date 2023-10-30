function convertTodoObjectsToArray(todoObjects) {
  const arrangedTodoData = [];

  Object.values(todoObjects).forEach((element) => {
    arrangedTodoData.push(...(Object.values(element)));
  });

  return arrangedTodoData;
}

export default convertTodoObjectsToArray;
