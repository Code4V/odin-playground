import { formatDistance } from 'date-fns';
import TrashIcon from '@carbon/icons/lib/trash-can/16';
import EditIcon from '@carbon/icons/lib/edit/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';

import Trash from '../assets/trash.png';
import Edit from '../assets/pencil.png';
import { formatTodoPriority } from '../operations/todoOperations';

const Todo = (
  {
    project, title, priority, isComplete, description, dueDate,
  },
  index,
  options = {},
  ) => {

  const formattedDueDate = parseInt(dueDate, 10);
  
  const todo = document.createElement('div');
  todo.classList.add('todo');
  todo.dataset.order = index;
  todo.setAttribute('id', `${project}-${index}`);

  if ((formattedDueDate - new Date().getTime()) < 0) 
    todo.classList.add('todo--expired')

  if (options.duration != null) {
    todo.style.animationDuration = options.duration;
  }

  const todoTitleContainer = document.createElement('div');
  todoTitleContainer.classList.add('todo__title');

  const todoTitle = document.createElement('h4');
  todoTitle.classList.add('todo__title-header');
  todoTitle.textContent = title;

  const todoPriority = document.createElement('span');
  todoPriority.classList.add('todo__title-priority');
  todoPriority.textContent = formatTodoPriority(priority);

  const todoComplete = document.createElement('p');
  todoComplete.classList.add('todo__title-status');
  todoComplete.textContent = isComplete ? 'Complete' : 'Incomplete';

  todoTitleContainer.append(todoTitle, todoPriority, todoComplete);

  const todoContentContainer = document.createElement('div');
  todoContentContainer.classList.add('todo__content');

  const todoDescription = document.createElement('p');
  todoDescription.classList.add('todo__content-description');
  todoDescription.textContent = description;

  todoContentContainer.append(todoDescription);

  todo.append(todoTitleContainer, todoContentContainer);

  const actionsContainer = document.createElement('div');
  actionsContainer.classList.add('todo__actions');

  const deleteButton = toSVG({
    ...TrashIcon,
    attrs: getAttributes(TrashIcon.attrs),
  });

  deleteButton.src = Trash;
  deleteButton.classList.add('todo__actions-delete');

  const editButton = toSVG({
    ...EditIcon,
    attrs: getAttributes(EditIcon.attrs),
  })

  editButton.src = Edit;
  editButton.classList.add('todo__actions-edit');


  const todoDueDate = document.createElement('p');
  todoDueDate.classList.add('todo__actions-duedate');
  todoDueDate.textContent = formatDistance(formattedDueDate, new Date(), {
    addSuffix: true,
  });

  actionsContainer.append(deleteButton, editButton, todoDueDate);

  todo.appendChild(actionsContainer);

  return todo;
};

export default Todo;
