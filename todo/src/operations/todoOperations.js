const addTodo = (currentData, data) => 
{  
  var storedData = Array.from(localStorage)
  if(storedData.includes(JSON.stringify(data)))
    return alert("ENGK")

  const addPromise = new Promise((resolve, reject) => {
    if (!currentData) 
    {
      reject("No data has been inserted!");
      return;
    }
      
    if (typeof data !== "object") 
    {
      reject("Data must be an Object");
      return;
    }
    
    if (data.constructor.name != "Todo") 
    {
      reject("Must be type of Todo");
      return;
    }

    data = data.todoDetails;

    currentData.push(data)
    localStorage.setItem(localStorage.length, JSON.stringify(data))
    
    resolve("Item has been added!");
  })  

  addPromise.then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err)
  })

  return currentData;
}

const deleteTodo = (currentData, dataIndex) =>
{
  currentData.splice(dataIndex, 1);
  localStorage.removeItem(dataIndex)
  return currentData;  
}

export { addTodo, deleteTodo };

