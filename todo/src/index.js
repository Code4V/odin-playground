import Todo from "./classes/todo"; 
import addTodo from "./operations/addTodo";

var firstTodo = new Todo('Test', 'Test description', new Date(2023, 10, 23))
var secondTodo = new Todo('Test1', 'TeASst description', new Date(2023, 10, 23))
var thirdTodo = new Todo('Test2', 'Test aasddescription', new Date(2023, 10, 23))
var fourthTodo = new Todo('Test3', 'Test desddcription', new Date(2023, 10, 23))


const Todos = [
  firstTodo.todoDetails,
  secondTodo.todoDetails,
  thirdTodo.todoDetails,
  fourthTodo.todoDetails
];

const main = document.querySelector('#content');
const pre = document.createElement('pre');

firstTodo.updateProject = "The First Project"

pre.textContent = firstTodo.todoDetails;

var jsonTodos = JSON.stringify(Todos);



console.log(jsonTodos)


main.appendChild(pre);