import Todo from "./classes/Todo"; 
import { addTodo, deleteTodo } from "./operations/todoOperations";
import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";

import TodoList from "./components/todoList";

const newTodo = new Todo('Test', 'testing description', new Date());

class Test {};

// const newSoemthing = new Date();

addTodo(data, newTodo);
const main = document.querySelector('#content');

// var jsonTodos = JSON.parse(data);

// addTodo(data, addedTodo.todoDetails)
// addTodo(data, secondAdd.todoDetails)

// console.log(data)


// data.forEach((element, index) => {
//   localStorage.setItem(index, JSON.stringify(element));
// })

// deleteTodo(data, 1)

clearStorage();

setStorage(data);

main.appendChild(TodoList(data));

console.log(data);