// Objects The Oden Project-- Library Project

let myLibrary = [
    {
        title: 'Test1',
        author: 'test1',
        pages: 49, 
        read: true
    },
    {
        title: 'Test2',
        author: 'test2',
        pages: 4944, 
        read: true
    },
    {
        title: 'Test3',
        author: 'test3',
        pages: 42, 
        read: false
    }
];


class Book{
    constructor(title, author, pages, read){
        this._title = title; 
        this._author = author;
        this._pages = pages;
        this._read = read;
    }
    get title() {
        return this._title;
    }
    get author(){
        return this._author
    }
    get pages(){
        return this._pages
    }
    get read(){
        return this._read
    }

    info(){
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
    }
}
// addBookToLibrary(){
//     myLibrary.push(theHobbit)
// }

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info());


let modal = document.getElementById('myModal');


document.getElementById('newBook').addEventListener('click', openModal)

function openModal(){
    modal.style.display = "block";
}

document.getElementById('addBookToLib').addEventListener('click', addBook);

function addBook(){
  const newAddedBook = document.createElement('div') 
  newAddedBook.classList.add('newAddedBook')
  newAddedBook.textContent = `Book title: ${this.title}`
  
}