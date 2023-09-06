import { format } from 'date-fns';

class Todo {
  #title; #description; #dueDate; #priority; #createdAt;

  constructor(title, description, dueDate, priority = 0)
  {
    this.#title = title;
    this.#description = description;
    this.#dueDate = format(dueDate,  'MM/dd/yyyy - hh:mm:ss');
    this.#priority = priority;
    this.#createdAt = format(new Date(), 'MM/dd/yyyy - hh:mm:ss');
  }

  get todoDetails () {
    return `
    ${this.#title} -> ${this.#description} 
    due date is ${this.#dueDate}
    created at ${this.#createdAt}
            
    priority is ${this.#priority}
    `;
  }
}


export default Todo;