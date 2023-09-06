import Todo from "./components/todo"; 

var firstTodo = new Todo('Test', 'Test description', new Date(2023, 10, 23))


const main = document.querySelector('#content');
const pre = document.createElement('pre');
pre.textContent = firstTodo.getTodo();

main.appendChild(pre);