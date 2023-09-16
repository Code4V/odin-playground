import FormFactory from './formFactory';

const Form = () =>
{
  const formContainer = document.createElement("form");
  formContainer.classList.add('form');
  
  formContainer.append(FormFactory("title", "Title").InputField());
  formContainer.appendChild(FormFactory("project", "Project").InputField());
  // formContainer.appendChild(FormInput("number", "priority"));
  formContainer.appendChild(FormFactory("description", "Description").TextArea());
  formContainer.appendChild(FormFactory("dueDate", "Due Date").DateField());

  const formSubmit = document.createElement("button");
  formSubmit.type = "submit";
  formSubmit.textContent = "Add Todo";

  formContainer.appendChild(formSubmit);

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const FormEvent = new FormData(formContainer);

    const res = Object.fromEntries(FormEvent);

    for (const items of FormEvent)
    {
      console.log(items);
    }
    FormEvent.forEach(element => {
      console.log(element);
    })
    console.log(res);

    
  })
  return formContainer;
}

export default Form;