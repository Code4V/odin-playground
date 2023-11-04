const sortTodoBy = (dataList, options = {}) => {
  const key = options.category;

  switch (typeof dataList[0]) {
    case 'object':
      dataList.sort((fdata, sdata) => {
        if (options.isAscending) return fdata[key] - sdata[key];

        return sdata[key] - fdata[key];
      });
      break;

    default:
      dataList.sort((fdata, sdata) => {
        if (options.isAscending) return fdata - sdata;

        return sdata - fdata;
      });
      break;
  }

  return dataList;
};

/**
 *
 * @param { Todo Array } todoData
 * @returns Object
 */
const sortByProject = (todoData) => {
  const projects = [];
  const filteredProject = {};

  todoData.filter((element) => {
    if (!projects.includes(element.project)) projects.push(element.project);

    return element;
  });

  projects.sort();

  projects.forEach((projectName) => {
    const newObject = [];

    todoData.forEach((innerElement) => {
      if (innerElement.project === projectName) {
        newObject.push(innerElement);
      }
    });

    filteredProject[projectName] = newObject;
  });

  return filteredProject;
};

// eslint-disable-next-line default-param-last
const filterBy = (todoData = [], { dataKey, isDate, isTrue = false }) => {
  if (todoData.length === 0) return todoData;
  if (typeof todoData[0] !== 'object') return 'Todo Data must contain an array of Objects!';

  const remainingData = todoData.filter((element) => {
    switch (typeof element[dataKey]) {
      case 'number':
        if (isDate && element[dataKey] < new Date().getTime()) return element;
        if (!isDate && element[dataKey] > 0) return element;
        break;
      case 'boolean':
        if (element[dataKey] === isTrue) return element;
        break;
      default:
        return element;
    }
    return element;
  });

  return remainingData;
};

export { sortTodoBy, sortByProject, filterBy };
