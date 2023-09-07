import Todo from "./../classes/todo"

function addTodo(title, description, deadline, project){
  return Todo(title, description, deadline, project)
}

export default addTodo;

