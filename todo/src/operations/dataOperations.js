const sortByDate = (dataList, options = {}) => {

  switch (typeof dataList[0]) {
    case "object":
      const key = options.category;
      dataList.sort((fdata, sdata) => {
        return fdata[key] - sdata[key];
      });
      break;

    default:
      dataList.sort((fdata, sdata) => {
        return fdata - sdata;
      });
      break;
  }

  return dataList;
};


const filterProjects = (todoData) => {
  let projects = [];
  let filteredProject = [];

  todoData.filter((element) => {
    if (projects.includes(element.project)) return;
    projects.push(element.project);
  });

  projects.sort();

  projects.forEach((outerElement) => {
    var newObject = {
      [outerElement]: [],
    };
    
    todoData.forEach((innerElement) => {
      if (innerElement.project == outerElement) {
        newObject[outerElement].push(innerElement);
        return;
      } else return;
    });

    filteredProject.push(newObject);
  });

  return { projects, filteredProject };
};
// module.exports = sortByDate;

export { sortByDate, filterProjects };
