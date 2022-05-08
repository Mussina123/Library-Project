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
    }
}





// Store class: Handles Local Storage 

// Event: Display Books 

// Event: add a book 

// Event: remove a book 

