import Todo from "./classes/Todo"; 
import { addTodo, deleteTodo } from "./operations/todoOperations";
import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";

import order from "./classes/Builder";

import Form from "./components/form";

import TodoList from "./components/todoList";

const newTodo = new Todo('AAAAA', 'testing description', new Date());

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


clearStorage();

setStorage(data);

deleteTodo(data, 2)
deleteTodo(data, 1)

console.log(data);
main.appendChild(TodoList(data));
main.appendChild(Form())

console.log(order.orderSummary)