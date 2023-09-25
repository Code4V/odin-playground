import { parseISO } from "date-fns";
import { getStorage } from "../operations/storageOperations";
import { deleteTodo } from "../operations/todoOperations";
import format from "date-fns/format";


const Todo = (todoDetails, index) => {
  const todo = document.createElement("pre");
  todo.classList.add("todo");
  todo.dataset.order = index;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  if (todoDetails.priority > 0)
    todo.classList.add("todo-list__todos--priority");

    var intDate = parseInt(todoDetails.dueDate);
    var createdDate = parseInt(todoDetails.createdAt)
  todo.textContent = `
    ${todoDetails.title} ${todoDetails.description}
    ${format(intDate, 'MMMM-dd-yyyy')} ${format(createdDate, 'MMMM-dd-yyyy')}
    
    ${todoDetails.priority}
    ${todoDetails.project}
    `;

  deleteButton.addEventListener("click", () => {
    deleteTodo(getStorage(), `${todoDetails.project}-${index}`);
  });

  todo.appendChild(deleteButton);

  return todo;
};

export default Todo;
