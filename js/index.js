function Book (title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

Book.prototype.info = function () {
    return (this.title + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet')
}

function Magazine (title, author, pages) {
    Book.call(this, title, author, pages)
    this.isThick = function () {
        if(this.pages > 200) return "Thick Boi"
        return "Thin Ass"
    }
}

function Dictionary (title, author, pages) {
    Magazine.call(this, title, author, pages)
    // Magazine.call(this)
}

Book.prototype.throw = function () {
    return ("You've thrown " + this.title + ", which is a " + this.constructor.name)
}

Magazine.prototype = Object.create(Book.prototype)

Dictionary.prototype = Object.create(Book.prototype)

Dictionary.prototype.throw = function () {
    return ("You can't throw a Dictionary")
}

function addBookToLibrary(){

}


let myLibrary = [];

const Book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295)
const Book2 = new Book('Lord of the Rings', 'J.R.R Tolkien', 500)
const Book3 = new Book('Middle Earth', 'J.R.R Tolkien', 299)
const Magazine1 = new Magazine('Timely Earth', 'John Boulevard', 100)
const Dictionary1 = new Dictionary('Every Word From 2000', 'Steve Morder', 500)

myLibrary.push(Book1, Book2, Book3)

myLibrary.forEach((items) => {
    console.log(items.title)
    var booktitle = document.createElement('li')
    booktitle.textContent = items.title
    document.getElementById('book_list').append(booktitle)
})




var list = "";


function displayBooks(title, index) {
    list += index + ': ' + title.title
}

