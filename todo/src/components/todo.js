import { parseISO, formatRelative, formatDistance } from "date-fns";
import { getStorage } from "../operations/storageOperations";
import { deleteTodo } from "../operations/todoOperations";
import Trash from "../assets/trash.png"
import format from "date-fns/format";


const Todo = (todoDetails, index, options = {}) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.dataset.order = index;

  if (options.duration != null)
  {
    todo.style.animationDuration = options.duration;
  }

  const todoTitleContainer = document.createElement("div");
  todoTitleContainer.classList.add("todo__title");

  const todoTitle = document.createElement("h4");
  todoTitle.classList.add("todo__title-header")
  todoTitle.textContent = todoDetails.title;
  
  const todoComplete = document.createElement("p");
  todoComplete.classList.add("todo__title-status")
  todoComplete.textContent = todoDetails.isComplete ? "Complete" : "Incomplete";

  todoTitleContainer.append(todoTitle, todoComplete)

  const todoContentContainer = document.createElement("div");
  todoContentContainer.classList.add("todo__content");

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__content-description")
  todoDescription.textContent = todoDetails.description;
  
  var dueDate = parseInt(todoDetails.dueDate);

  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("todo__content-duedate")
  todoDueDate.textContent = formatDistance(dueDate, new Date(), {addSuffix: true});
 

  todoContentContainer.append(todoDescription, todoDueDate);

  todo.append(todoTitleContainer, todoContentContainer)

  const deleteButton = new Image(16)
  deleteButton.src = Trash;

  deleteButton.classList.add("todo__delete")

  // if (todoDetails.priority > 0)
  //   todo.classList.add("todo-list__todos--priority");

  //   var intDate = parseInt(todoDetails.dueDate);
  //   var createdDate = parseInt(todoDetails.createdAt)
  // todo.textContent = `
  //   ${todoDetails.title} ${todoDetails.description}
  //   ${format(intDate, 'MMMM-dd-yyyy')} ${format(createdDate, 'MMMM-dd-yyyy')}
    
  //   ${todoDetails.priority}
  //   ${todoDetails.project}
  //   `;

  deleteButton.addEventListener("click", () => {
    deleteTodo(getStorage(), `${todoDetails.project}-${index}`);
  });

  todo.appendChild(deleteButton);

  return todo;
};

export default Todo;
