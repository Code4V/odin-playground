const sortByDate = (dataList, options = {}) =>
{
  dataList.sort((fdata, sdata) => {
    return fdata.dueDate - sdata.dueDate;
  })

  console.log(dataList)

  return dataList;
}

module.exports = sortByDate

// export { sortByDate };
