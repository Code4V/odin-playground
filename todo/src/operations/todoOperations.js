import displayController from '../controllers/displayController';
import { getStorage } from './storageOperations';

/**
 *
 * @param { Todo } data => A Todo object to be added to LocalStorage
 * @returns A Promise Object
 */
const addTodo = (data) => {
  const addPromise = new Promise((resolve, reject) => {
    if (typeof data !== 'object') {
      reject(new Error('Data must be an Object'));
      return;
    }

    if (data.constructor.name !== 'Todo') {
      reject(new Error('Must be type of Todo'));
      return;
    }

    data = data.todoDetails;

    localStorage.setItem(
      `${data.project}-${localStorage.length}`,
      JSON.stringify(data),
    );

    displayController.displayList();

    resolve('Item has been added!');
  });

  return addPromise;
};

const deleteTodo = (dataIndex) => {
  const deletePromise = new Promise((resolve, reject) => {
    localStorage.removeItem(dataIndex);
    const currentData = getStorage();

    if (currentData.length === 0) {
      // clearStorage();
      displayController.displayList();
      reject(new Error('Data is now empty'));
      return;
    }

    // clearStorage();

    displayController.displayList();
    resolve('Todo successfully deleted');
  });

  return deletePromise;
};

const editTodo = (dataIndex, updatedData) => {
  updatedData = JSON.stringify(updatedData);

  localStorage.setItem(dataIndex, updatedData);
};

export { addTodo, deleteTodo, editTodo };
