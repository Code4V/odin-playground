import Todo from "./classes/todo"; 
import { addTodo, deleteTodo } from "./operations/todoOperations";

import data from "./data/todo.json";

var addedTodo = new Todo('Test', 'Test description', new Date(2023, 6, 5));

const main = document.querySelector('#content');

addedTodo.updateProject = "The First Projsect"

addedTodo.updateDescription = "Bruh"

addedTodo.updateTitle = "ETEST"
addedTodo.updatePriority = 1

console.log(addedTodo)


// var jsonTodos = JSON.parse(data);

addTodo(data, addedTodo.todoDetails)
addTodo(data, addedTodo.todoDetails)

// console.log(data)

data.forEach((element, index) => {
  localStorage.setItem(index, JSON.stringify(element));
})

deleteTodo(data, 1)

data.forEach(element => {
  console.log(element)
  const pre = document.createElement('pre');
  pre.textContent = `
  ${element.title} ${element.description}
  ${element.dueDate} ${element.createdAt}

  ${element.priority}
  ${element.project}
  `;
  main.appendChild(pre);
})


console.log(data);