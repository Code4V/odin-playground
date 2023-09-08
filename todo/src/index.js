import Todo from "./classes/todo"; 
import addTodo from "./operations/addTodo";

import data from "./data/todo.json";

var addedTodo = new Todo('Test', 'Test description', new Date(2023, 6, 5));

const main = document.querySelector('#content');

addedTodo.updateProject = "The First Project"




// var jsonTodos = JSON.parse(data);

addTodo(data, addedTodo.todoDetails)
addTodo(data, addedTodo.todoDetails)

// console.log(data)

data.forEach((element, index) => {
  localStorage.setItem(index, JSON.stringify(element));
})


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


console.log(JSON.parse(localStorage.getItem(1)));