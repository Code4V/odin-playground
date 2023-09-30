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

// module.exports = sortByDate;

export { sortByDate };
