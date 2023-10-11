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

    const updatedData = data.todoDetails;

    localStorage.setItem(
      `${updatedData.project}-${localStorage.length}`,
      JSON.stringify(updatedData),
    );

    resolve('Item has been added!');
  });

  return addPromise;
};

const deleteTodo = (dataIndex) => {
  const deletePromise = new Promise((resolve, reject) => {
    localStorage.removeItem(dataIndex);
    const currentData = getStorage();

    if (currentData.length === 0) {
      reject(new Error('Data is now empty'));
      return;
    }

    resolve('Todo successfully deleted');
  });

  return deletePromise;
};

const editTodo = (dataIndex, updatedData) => {
  const processedData = JSON.stringify(updatedData);

  localStorage.setItem(dataIndex, processedData);
};

export { addTodo, deleteTodo, editTodo };
