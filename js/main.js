// Book Class: Represents a book 

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }
}
// UI Class: Handle UI Tasks... book display... show alert.. 

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One', 
                author: 'John Doe', 
                pages: 432, 
                read: 'I have not read' 
            },
            {
                title: 'Book Two', 
                author: 'John Dane', 
                pages: 32, 
                read: 'I have read book'  
            }
        ];

        const books = StoredBooks;


        books.forEach((book)=> UI.addBookToList(book)); 
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td> 
        <td>${book.pages}</td> 
        <td>${book.read}</td>  
        <td> <a href = '#' class = "btn btn-danger btn-sm delete">X </a> </td> 
        
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const section = document.querySelector('#main-box');
        const form = document.querySelector('#book-form');
        section.insertBefore(div, form); 



        // Vanish in 3 secs 
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }



    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').value = '';
    }



}

// Store class: Handles Local Storage 

// Event: Display Books 

document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: add a book 

document.querySelector('#book-form').addEventListener('submit', (e) => {







// Prevent actual submit
e.preventDefault();


    //get form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').value;


// Validate Books

if(title === '' || author === '' || pages === '' || read === ''){
    UI.showAlert('Please Fill Out All Fields', 'danger');
}else {
// Instatiate book

const book = new Book (title, author, pages, read);

console.log(book)

// add book to list (UI)
UI.addBookToList(book);

// Show sucess message 

UI.showAlert('Book Added', 'success');

// clear fields 

UI.clearFields()

    }
});




// Target the actual list... remove the parent parent to get rid of the whole row" 

document.querySelector('#book-list').addEventListener('click', (e) => {

    UI.deleteBook(e.target)


// Event: remove a book 


UI.showAlert('Book Removed', 'success');
});

