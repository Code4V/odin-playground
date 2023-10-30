import { getStorage } from './storageOperations';

import convertTodoObjectsToArray from './todoObjectProcessor';
import {
  getStorage as ExperimentalGetStorage,
  setTodoStorage as ExperimentalSetStorage,
  getLocalStorageItem,
} from './EXPERIMENTALstorageOperations';

/**
 *
 * @param { Todo } data => A Todo object to be added to LocalStorage
 * @returns A Promise Object
 */
const addTodo = (data) => new Promise((resolve, reject) => {
  if (typeof data !== 'object') {
    reject(new Error('Data must be an Object'));
    return;
  }

  if (data.constructor.name !== 'Todo') {
    reject(new Error('Must be type of Todo'));
    return;
  }

  const currentData = ExperimentalGetStorage();
  currentData.push(data.todoDetails);

  ExperimentalSetStorage(currentData);

  // const updatedData = data.todoDetails;

  // localStorage.setItem(
  //   `${updatedData.project}-${localStorage.length}`,
  //   JSON.stringify(updatedData),
  // );

  resolve('Item has been added!');
});

/**
 *
 * @param {string || array} dataIndex
 * @returns Promise
 */
const deleteTodo = (dataIndex) => new Promise((resolve, reject) => {
  const currentData = getLocalStorageItem();
  const indicatedProject = dataIndex.split('-')[0];

  if (typeof dataIndex === 'number') reject(new Error('Index should indicate the Project Name'));

  if (currentData.todoData[indicatedProject] === null) reject(new Error('Project does not Exist!'));

  if (currentData.length === 0) reject(new Error('Data is empty'));

  delete currentData.todoData[indicatedProject][dataIndex];

  ExperimentalSetStorage(convertTodoObjectsToArray(currentData.todoData));

  resolve('Todo successfully deleted');
});

const editTodo = (dataIndex, updatedData) => {
  const currentData = getLocalStorageItem();

  currentData.todoData[dataIndex.split('-')[0]][dataIndex] = updatedData;

  ExperimentalSetStorage(convertTodoObjectsToArray(currentData.todoData));
};

// const markTodoComplete = (dataIndex) => {
//   const dataFromStorage = getLocalStorageItem(dataIndex);

//   dataFromStorage.isComplete = true;

//   localStorage.setItem(dataIndex, dataFromStorage);
// };

const formatTodoPriority = (todoPriority) => {
  if (todoPriority === null) return new Error('Value must not be Null');

  let formattedPriority;

  switch (todoPriority) {
    case 0:
      formattedPriority = 'Low';
      break;
    case 1:
      formattedPriority = 'Normal';
      break;
    case 2:
      formattedPriority = 'High';
      break;
    default:
      formattedPriority = 'Unknown Value';
  }

  return formattedPriority;
};

export {
  addTodo, deleteTodo, editTodo, formatTodoPriority,
};
