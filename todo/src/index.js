import Todo from "./classes/Todo"; 
import { addTodo, deleteTodo } from "./operations/todoOperations";
import data from "./data/todo.json";



const main = document.querySelector('#content');

// var jsonTodos = JSON.parse(data);

// addTodo(data, addedTodo.todoDetails)
// addTodo(data, secondAdd.todoDetails)

// console.log(data)


// data.forEach((element, index) => {
//   localStorage.setItem(index, JSON.stringify(element));
// })

// deleteTodo(data, 1)
if (localStorage.length != 0) 
{
  data = Array.from(localStorage);
}

data.forEach(element => 
  {
    if(localStorage.length != 0)
      element = JSON.parse(element)

    console.log(element);
    const pre = document.createElement('pre');
    pre.textContent = `
    ${element.title} ${element.description}
    ${element.dueDate} ${element.createdAt}

    ${element.priority}
    ${element.project}
    `;
    main.appendChild(pre);
  }
)


console.log(data);