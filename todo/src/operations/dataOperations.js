const sortByDate = (dataList, options = {}) => {
  const key = options.category;

  switch (typeof dataList[0]) {
    case 'object':
      dataList.sort((fdata, sdata) => fdata[key] - sdata[key]);
      break;

    default:
      dataList.sort((fdata, sdata) => fdata - sdata);
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
// module.exports = sortByDate;

export { sortByDate, filterProjects };
