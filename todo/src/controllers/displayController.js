const displayList = (dataList, main = undefined) =>
{
  var main = main ?? document.querySelector('main');
  main.innerHTML = "";

  main.appendChild(dataList)
}



export { displayList };