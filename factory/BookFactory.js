const bookFactory = (title, pages, ...author) => {
    const sizecheck = () => {
        if (pages > 150) return "Thick Boi"
        else return "Skinny Pete"
    }
    const addAuthor = (...authors) => {
        authors.forEach((value) => {
            author.push(value)
        })
    }
    const addPages = (additional) => { pages += additional }
    const removePages = (tbremoved) => { pages -= tbremoved }

    const getTitle = () => { return title }
    const getAuthor = () => { return author }
    const getPages = () => { return pages }
    
    return {addAuthor,
             addPages,
             removePages,
             getTitle,
             getPages,
             getAuthor, 
             sizecheck } 
}

const noteFactory = (title, pages, ...author) => {
    const {getTitle, getPages, getAuthor, sizecheck} = bookFactory(title, pages, ...author)

    return {getTitle, 
            getPages, 
            getAuthor,
            sizecheck}
}

var Biography = bookFactory("My Life in Two", 340, "Skizzo")
var Book2 = bookFactory("Dicks Out", 100, "Trolly")
var Book3 = bookFactory("Chain Tits", 299, "Soapad")
var Note1 = noteFactory("Notepad Things", 150, "Me", "Dicksie")

console.log(Note1.getAuthor())

