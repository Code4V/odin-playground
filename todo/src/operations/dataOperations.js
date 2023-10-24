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

const filterProjects = (todoData) => {
  const projects = [];
  const filteredProject = [];

  todoData.filter((element) => {
    if (!projects.includes(element.project)) projects.push(element.project);

    return element;
  });

  projects.sort();

  projects.forEach((outerElement) => {
    const newObject = {
      [outerElement]: [],
    };

    todoData.forEach((innerElement) => {
      if (innerElement.project === outerElement) {
        newObject[outerElement].push(innerElement);
      }
    });

    filteredProject.push(newObject);
  });

  return { projects, filteredProject };
};

const filterExpired = (todoData) => {
  const remainingData = [];

  todoData.filter((element) => {
    if (element.dueDate > new Date().getTime()) remainingData.push(element);

    return element;
  });

  return remainingData;
};
// module.exports = sortByDate;

export { sortTodoBy, filterProjects, filterExpired };
