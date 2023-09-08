import Todo from "./classes/todo"; 
import addTodo from "./operations/addTodo";

import data from "./data/todo.json";

var addedTodo = new Todo('Test', 'Test description', new Date(2023, 6, 5));

const main = document.querySelector('#content');
const pre = document.createElement('pre');

addedTodo.updateProject = "The First Project"


pre.textContent = addedTodo.todoDetails;



// var jsonTodos = JSON.parse(data);

addTodo(data, addedTodo.todoDetails)
addTodo(data, addedTodo.todoDetails)

// console.log(data)

data.forEach((element, index) => {
  // console.log(element);
  localStorage.setItem(index, JSON.stringify(element));
})


console.log(JSON.parse(localStorage.getItem(1)));
main.appendChild(pre);