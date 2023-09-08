import Todo from "./../classes/todo"

function addTodo(currentData, data){
  currentData.push(data)
  
  return currentData;
}

export default addTodo;

