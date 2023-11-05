// CLASS DECLARATIONS
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = false;
  }
}

class Magazine extends Book {
  isThick() {
    if (this.pages > 200) return "Thick Boi";
    return "Thin Ass";
  }
}

class Dictionary extends Magazine {
  isInteresting = false;
}

Book.prototype.read = function () {
  this.hasRead = true;
};

Book.prototype.info = function () {
  return (
    this.title +
    " by " +
    this.author +
    ", " +
    this.pages +
    " pages, not read yet"
  );
};

Book.prototype.throw = function () {
  return (
    "You've thrown " + this.title + ", which is a " + this.constructor.name
  );
};

Magazine.prototype = Object.create(Book.prototype);

Dictionary.prototype = Object.create(Book.prototype);

Dictionary.prototype.throw = function () {
  return "You can't throw a Dictionary";
};

const Book1 = new Book("The Hobbit", "J.R.R Tolkien", 295);
const Book2 = new Book("Lord of the Rings", "J.R.R Tolkien", 500);
const Book3 = new Book("Middle Earth", "J.R.R Tolkien", 299);
const Magazine1 = new Magazine("Timely Earth", "John Boulevard", 100);
const Dictionary1 = new Dictionary("Every Word From 2000", "Steve Morder", 500);

let myLibrary = [];
myLibrary.push(Book1, Book2, Book3, Magazine1);

renderLibrary(myLibrary);

function checkInputValidity(inputElement) {
  if (!inputElement.checkValidity()) {
    inputElement.nextElementSibling.setAttribute('style', 'animation: 5000ms ease-in magic forwards; ')
    inputElement.nextElementSibling.innerHTML = inputElement.validationMessage;

    setTimeout(() => {
        inputElement.nextElementSibling.innerHTML = '';
    inputElement.nextElementSibling.setAttribute('style', '')  
    }, 5000)
    
  } else {
    inputElement.nextElementSibling.innerHTML = "";
    inputElement.nextElementSibling.setAttribute('style', '')  
  }
}

function addBookToLibrary(e) {
  e.preventDefault();

  let getTitle = document.getElementById("bookTitle");
  let getAuthor = document.getElementById("bookAuthor");
  let getPages = document.getElementById("bookPages");

  checkInputValidity(getTitle);
  checkInputValidity(getPages);
  checkInputValidity(getAuthor);

  if (
    getTitle.value === null ||
    getTitle.value === undefined ||
    getTitle.value === ""
  )
    return false;
  if (
    getAuthor.value === null ||
    getAuthor.value === undefined ||
    getAuthor.value === ""
  )
    return false;
  if (
    getPages.value === null ||
    getPages.value === undefined ||
    getPages.value === ""
  )
    return false;

  myLibrary.push(new Book(getTitle.value, getAuthor.value, getPages.value));

  getTitle.value = "";
  getAuthor.value = "";
  getPages.value = "";

  reset();
  renderLibrary(myLibrary);
}

function reset() {
  var reset = document.querySelectorAll("tbody tr");
  reset.forEach((items) => {
    items.remove();
  });
}

function deleteBook(index) {
  let tbRemoved = document.querySelector("tr[data-attribute='" + index + "']");
  tbRemoved.remove();
  myLibrary.splice(index, 1);

  reset();
  renderLibrary(myLibrary);
}

function markAsRead(index) {
  let tbHighlighted = document.querySelector(
    "tr[data-attribute='" + index + "']"
  );

  if (myLibrary[index].hasRead == true) return;
  else myLibrary[index].read();

  reset();
  renderLibrary(myLibrary);
}

function renderLibrary(library) {
  if (library === null || library === undefined) return;
  library.forEach((items, index) => {
    // Creates Row
    let tableRow = document.createElement("tr");
    let tableData_Title = document.createElement("td"),
      tableData_Author = document.createElement("td"),
      tableData_Pages = document.createElement("td"),
      tableData_Status = document.createElement("td"),
      tableData_Action = document.createElement("td");

    //Creates Delete Button
    let tableData_Anchor = document.createElement("input");
    tableData_Anchor.setAttribute("type", "button");
    tableData_Anchor.setAttribute("value", "Delete");
    tableData_Anchor.setAttribute("onclick", "deleteBook(" + index + ")");

    // Creates Read Button
    let tableData_Read = document.createElement("input");
    tableData_Read.setAttribute("type", "button");
    tableData_Read.setAttribute("value", "Read");
    tableData_Read.setAttribute("onclick", "markAsRead(" + index + ")");

    tableData_Title.textContent = items.title;
    tableData_Author.textContent = items.author;
    tableData_Status.textContent = items.hasRead == false ? "Not Read" : "Read";
    if (items.hasRead == false)
      tableData_Status.setAttribute("style", "color: red");
    else tableData_Status.setAttribute("style", "color: green");
    tableData_Pages.textContent = items.pages;

    tableRow.setAttribute("data-attribute", index);

    tableData_Action.appendChild(tableData_Anchor);
    tableData_Action.appendChild(tableData_Read);

    tableRow.appendChild(tableData_Title);
    tableRow.appendChild(tableData_Author);
    tableRow.appendChild(tableData_Pages);
    tableRow.appendChild(tableData_Status);
    tableRow.appendChild(tableData_Action);

    return document.getElementById("table_body").append(tableRow);
  });
}
