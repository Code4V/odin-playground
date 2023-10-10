import { parseISO, formatRelative, formatDistance } from "date-fns";
import { getStorage } from "../operations/storageOperations";
import { deleteTodo, editTodo } from "../operations/todoOperations";
import Trash from "../assets/trash.png";
import Edit from "../assets/pencil.png";
import format from "date-fns/format";
import FormInput from "./formInput";
import Certificate from "@carbon/icons/lib/checkmark--filled/16";
import { getAttributes, toSVG } from "@carbon/icon-helpers";

const Todo = (todoDetails, index, options = {}) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.dataset.order = index;

  if (options.duration != null) {
    todo.style.animationDuration = options.duration;
  }

  const todoTitleContainer = document.createElement("div");
  todoTitleContainer.classList.add("todo__title");

  const todoTitle = document.createElement("h4");
  todoTitle.classList.add("todo__title-header");
  todoTitle.textContent = todoDetails.title;

  const todoComplete = document.createElement("p");
  todoComplete.classList.add("todo__title-status");
  todoComplete.textContent = todoDetails.isComplete ? "Complete" : "Incomplete";

  todoTitleContainer.append(todoTitle, todoComplete);

  const todoContentContainer = document.createElement("div");
  todoContentContainer.classList.add("todo__content");

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__content-description");
  todoDescription.textContent = todoDetails.description;

  todoContentContainer.append(todoDescription);

  todo.append(todoTitleContainer, todoContentContainer);

  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("todo__actions");

  const deleteButton = new Image(16);
  deleteButton.src = Trash;
  deleteButton.classList.add("todo__actions-delete");

  const editButton = new Image(16);
  editButton.src = Edit;
  editButton.classList.add("todo__actions-edit");

  const editButtonCheck = toSVG({
    ...Certificate,
    attrs: getAttributes(Certificate.attrs),
  });

  editButtonCheck.src = Edit;
  editButtonCheck.style.color = "darkgreen";

  var dueDate = parseInt(todoDetails.dueDate);

  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("todo__actions-duedate");
  todoDueDate.textContent = formatDistance(dueDate, new Date(), {
    addSuffix: true,
  });

  actionsContainer.append(deleteButton, editButton, todoDueDate);

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

  deleteButton.addEventListener("click", async () => {
    try 
    {
      await deleteTodo(`${todoDetails.project}-${index}`);
    }  
    catch (err)
    {
      console.log(err);
    }
  
  });

  editButton.addEventListener("click", () => {
    console.log(localStorage.getItem(`${todoDetails.project}-${index}`));

    const todoUpdate = FormInput("titleUpdate", "Enter new title").InputField({
      value: todoDetails.title,
    });

    const todoUpdateDescription = FormInput("descriptionUpdate", "Enter new Description").TextArea({
      value: todoDetails.description,
      addClass: [
        "form__input-textarea", 
      ],
    })

    
    todoTitle.replaceWith(todoUpdate);
    todoDescription.replaceWith(todoUpdateDescription);

    editButton.replaceWith(editButtonCheck);
  });

  editButtonCheck.addEventListener("click", () => {
    console.log(document.querySelector("#titleUpdate"));

    todoDetails.title = document.querySelector("#titleUpdate").value;

    editTodo(`${todoDetails.project}-${index}`, todoDetails);

    editButtonCheck.replaceWith(editButton);
  });

  todo.appendChild(actionsContainer);

  return todo;
};

export default Todo;
