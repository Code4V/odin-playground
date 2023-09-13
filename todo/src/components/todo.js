const Todo = (todoDetails) =>
{
    const todo = document.createElement('pre');
    todo.classList.add('todo');
    if(todoDetails.priority > 0) todo.classList.add('todo-list__todos--priority')
    todo.textContent = `
    ${todoDetails.title} ${todoDetails.description}
    ${todoDetails.dueDate} ${todoDetails.createdAt}
    
    ${todoDetails.priority}
    ${todoDetails.project}
    `;

    return todo; 
}

export default Todo;