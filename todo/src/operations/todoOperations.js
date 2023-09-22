import TodoList from "../components/todoList";
import { displayList } from "../controllers/displayController";
import clearStorage, { setStorage } from "./storageOperations";

const addTodo = (currentData, data) => 
{  
  var storedData = Array.from(localStorage)
  if(storedData.includes(JSON.stringify(data)))
    return alert("ENGK")

  const addPromise = new Promise((resolve, reject) => {
    if (!currentData) 
    {
      reject("No data has been inserted!");return;
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

  displayList(currentData);

  return currentData;
}

const deleteTodo = (currentData, dataIndex) =>
{
  const deletePromise = new Promise((resolve, reject) => {   
    if (currentData.filter((element, index) => index === dataIndex).length == 0) 
    {
      reject("Data not found");
      return;
    }

    console.log("NOEW", currentData)
    currentData.splice(dataIndex, 1);  
    
    if (currentData.length === 0)
    {
      clearStorage();
      displayList(currentData)
      reject("Data is now empty")
      return;
    }
    
    clearStorage();
    console.log({currentData, dataIndex});
    setStorage(currentData)

    resolve("Todo successfully deleted")
  })

  deletePromise.then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err)
  });

  console.log("AT END OF DELETE", currentData)

  displayList(currentData)

  // return currentData;  
}

export { addTodo, deleteTodo };

