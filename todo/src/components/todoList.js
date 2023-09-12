const TodoList = (todoData) =>
{
  const todosContainer = document.createElement('section');
  todosContainer.classList.add("todo-list");

  if (localStorage.length != 0)
    todoData = Array.from(localStorage);

  todoData.forEach(element => {
    if (localStorage.length != 0) element = JSON.parse(element);

    const todo = document.createElement('pre');
    todo.textContent = `
    ${element.title} ${element.description}
    ${element.dueDate} ${element.createdAt}
    
    ${element.priority}
    ${element.project}
    `;

    todosContainer.appendChild(todo);
  });  

  return todosContainer;
}

export default TodoList;