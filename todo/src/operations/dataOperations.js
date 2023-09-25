const sortByDate = (dataList) =>
{
  dataList.sort((fdata, sdata) => {
    return fdata.dueDate - sdata.dueDate;
  })

  return dataList;
}

export { sortByDate };