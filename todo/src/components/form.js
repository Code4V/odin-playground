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

  const titleField = FormInput("title", "Title").InputField({
    placeholder: "Enter To-do Title",
    isRequired: true,
  });
  const projectField = FormInput("project", "Project").InputField({
    placeholder: "Choose Project",
    isRequired: true,
  });
  const numberField = FormInput("number", "Priority").SelectField({
    choices: [
      {
        value: 0,
        content: "Low",
      },
      {
        value: 1,
        content: "Normal",
      },
      {
        value: 2,
        content: "High",
      },
      {
        value: 3,
        content: "Urgent",
      },
      {
        value: 4,
        content: "ASAP",
      },
    ],
    isRequired: true,
  });
  const descriptionField = FormInput("description", "Description").TextArea({
    isRequired: true,
  });
  const dueDateField = FormInput("dueDate", "Due Date").DateField({
    isRequired: true,
  });

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
