import Todo from "./components/todo"; 

var firstTodo = new Todo('Test', 'Test description', new Date(2023, 10, 23))

console.log(firstTodo.getTodo())