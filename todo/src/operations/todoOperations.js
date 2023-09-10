const addTodo = (currentData, data) => 
{
  currentData.push(data)
  
  return currentData;
}

const deleteTodo = (currentData, dataIndex) =>
{
  currentData.splice(dataIndex, 1);

  return currentData;  
}

export { addTodo, deleteTodo };

