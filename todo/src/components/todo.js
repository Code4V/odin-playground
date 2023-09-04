import { format, formatDistance, formatRelative, subDays} from 'date-fns';

class Todo {
  constructor(title, description, dueDate, priority = 0)
  {
    this.title = title;
    this.description = description;
    this.dueDate = format(dueDate,  'MM/dd/yyyy - hh:mm:ss');
    this.priority = priority;
    this.createdAt = format(new Date(), 'MM/dd/yyyy - hh:mm:ss');
  }

  getTodo () {
    return `${this.title} -> ${this.description} 
            due date is ${this.dueDate}
            created at ${this.createdAt}
            
            priority is ${this.priority}`
  }
}


export default Todo;