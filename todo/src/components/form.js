import FormInput from "./formInput";
import { addTodo } from "../operations/todoOperations";
import data from "../data/todo.json";
import Todo from "../classes/Todo";
import { format } from "date-fns";

const Form = () => {
  const formContainer = document.createElement("section");

  const form = document.createElement("form");
  form.classList.add("form");
  form.classList.add("todo");

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
    placeholder: "What's on your mind?",
    isRequired: true,
  });

  const dueDateField = FormInput("dueDate", "Due Date").DateField({
    isRequired: true,
  });

  const formSubmit = document.createElement("button");
  formSubmit.type = "submit";
  formSubmit.textContent = "Add Todo";

  const test = document.createElement("section");
  test.classList.add("todo__title");

  test.append(titleField, projectField);

  form.append(
    test,

    numberField,
    descriptionField,
    dueDateField
  );

  form.appendChild(formSubmit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const FormEvent = new FormData(form);
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

      switch (formInput.id) {
        case "dueDate":
          formInput.value = format(new Date(), "yyyy-MM-dd hh:mm");
          break;

        case "number":
          formInput.value = 0;
          break;

        default:
          formInput.value = "";
      }
    });
  });

  formContainer.appendChild(form);

  return formContainer;
};

export default Form;
