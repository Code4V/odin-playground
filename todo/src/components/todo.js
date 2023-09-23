import { getStorage } from "../operations/storageOperations";
import { deleteTodo } from "../operations/todoOperations";

const Todo = (todoDetails, index) => {
  const todo = document.createElement("pre");
  todo.classList.add("todo");
  todo.dataset.order = index;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  if (todoDetails.priority > 0)
    todo.classList.add("todo-list__todos--priority");

  todo.textContent = `
    ${todoDetails.title} ${todoDetails.description}
    ${todoDetails.dueDate} ${todoDetails.createdAt}
    
    ${todoDetails.priority}
    ${todoDetails.project}
    `;

  deleteButton.addEventListener("click", () => {
    deleteTodo(getStorage(), index);
  });

  todo.appendChild(deleteButton);

  return todo;
};

export default Todo;
