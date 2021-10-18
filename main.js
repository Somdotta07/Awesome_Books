/* eslint-disable linebreak-style */
//

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');
const button = document.getElementById('btn');
const books = [];
let id;

class book {
    id = this.id;

    name = this.name;

    author = this.author;
}

// Local Storage
if (localStorage.getItem('bookList') === null) {
  localStorage.setItem('bookList', []);
}

if (localStorage.getItem('id') === null) {
  localStorage.setItem('id', JSON.stringify(0));
  id = JSON.parse(localStorage.getItem('id'));
}