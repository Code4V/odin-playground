import Todo from "./classes/todo"; 
import addTodo from "./operations/addTodo";

var firstTodo = new Todo('Test', 'Test description', new Date(2023, 10, 23))
var secondTodo = new Todo('Test1', 'TeASst description', new Date(2023, 10, 23))
var thirdTodo = new Todo('Test2', 'Test aasddescription', new Date(2023, 10, 23))
var fourthTodo = new Todo('Test3', 'Test desddcription', new Date(2023, 10, 23))


const Todos = [
  firstTodo,
  secondTodo,
  thirdTodo,
  fourthTodo
];

const main = document.querySelector('#content');
const pre = document.createElement('pre');
firstTodo.updateProject = "The First Project"

pre.textContent = firstTodo.todoDetails;



Todos.forEach(element => {
  element.updatePriority = 2;

  console.log(element.todoDetails);
})


main.appendChild(pre);