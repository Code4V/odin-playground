import FormInput from './formInput';
import { addTodo } from '../operations/todoOperations';
import data from '../data/todo.json';
import Todo from '../classes/Todo';
import format  from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const Form = () =>
{
  const formContainer = document.createElement("form");
  formContainer.classList.add('form');
  
  formContainer.append(FormInput("title", "Title").InputField());
  formContainer.appendChild(FormInput("project", "Project").InputField());
  formContainer.appendChild(FormInput("number", "priority").NumberField());
  formContainer.appendChild(FormInput("description", "Description").TextArea());
  formContainer.appendChild(FormInput("dueDate", "Due Date").DateField());

  const formSubmit = document.createElement("button");
  formSubmit.type = "submit";
  formSubmit.textContent = "Add Todo";

  formContainer.appendChild(formSubmit);

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const FormEvent = new FormData(formContainer);

    const res = Object.fromEntries(FormEvent);

    const date = parseISO(res.dueDate);

    addTodo(data, new Todo(res.title, res.description, date));
    
  })
  return formContainer;
}

export default Form;