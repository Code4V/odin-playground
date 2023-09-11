const addTodo = (currentData, data) => 
{
  var storedData = Array.from(localStorage)
  if(storedData.includes(JSON.stringify(data)))
    return alert("ENGK")


  currentData.push(data)

  
  localStorage.setItem(localStorage.length, JSON.stringify(data))
  
  return currentData;
}

const deleteTodo = (currentData, dataIndex) =>
{
  currentData.splice(dataIndex, 1);
  localStorage.removeItem(dataIndex)
  return currentData;  
}

export { addTodo, deleteTodo };

