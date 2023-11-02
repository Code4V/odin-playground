const sortTodoBy = (dataList, options = {}) => {
  const key = options.category;

  switch (typeof dataList[0]) {
    case "object":
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

const filterBy = (todoData, { dataKey, isDate }) => {
  const remainingData = todoData.filter((element) => {
    switch (typeof dataKey) {
      case "number":
        if (isDate && element[dataKey] > new Date().getTime())
          return element;
        
        if (element[dataKey]) return element;
        break;
      case "boolean":
        if (element[options.dataKey] === true) return element;
        break;
      default:
        switch (typeof options.dataKey) {
        }

        return element;
    }
  });

  return remainingData;
};

const filterComplete = (todoData) => {
  const remainingData = todoData.filter((element) => {
    if (element.isComplete === true) return element;
  });
};

export { sortTodoBy, sortByProject, filterBy };
