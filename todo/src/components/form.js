import FormInput from "./formInput";
import { addTodo } from "../operations/todoOperations";
import data from "../data/todo.json";
import Todo from "../classes/Todo";
import parseISO from "date-fns/parseISO";
import { format } from "date-fns";
import { displayController } from "../controllers/displayController";
import { getStorage } from "../operations/storageOperations";

const Form = () => {
  const formContainer = document.createElement("form");
  formContainer.classList.add("form");

  const titleField = FormInput("title", "Title").InputField();
  const projectField = FormInput("project", "Project").InputField();
  const numberField = FormInput("number", "Priority").NumberField();
  const descriptionField = FormInput("description", "Description").TextArea();
  const dueDateField = FormInput("dueDate", "Due Date").DateField();

  
  const formSubmit = document.createElement("button");
  formSubmit.type = "submit";
  formSubmit.textContent = "Add Todo";
  
  formContainer.append(
    titleField,
    projectField,
    numberField,
    descriptionField,
    dueDateField
  );
  formContainer.appendChild(formSubmit);

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();

    const FormEvent = new FormData(formContainer);
    const res = Object.fromEntries(FormEvent);
    const date = new Date(res.dueDate).getTime();

    addTodo(
      data,
      new Todo(res.title, res.description, date, res.project, res.number)
    );

    [
      titleField,
      projectField,
      numberField,
      descriptionField,
      dueDateField,
    ].forEach((element) => {
      const formInput = element.childNodes[1];

      if (formInput.id === "dueDate")
        formInput.value = format(new Date(), "yyyy-MM-dd");
      else formInput.value = "";
    });
  });

  return formContainer;
};

export default Form;
