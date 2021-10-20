/* eslint-disable linebreak-style */
import Book from './book.js';

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
let allBooks;
export default class Add {
add = () => {
  const name = bookTitle.value;
  bookTitle.value = '';
  const author = bookAuthor.value;
  bookAuthor.value = '';
  if (!(name.length < 3 || author.length < 3)) {
    let id = JSON.parse(localStorage.getItem('id'));
    id += 1;
    localStorage.setItem('id', JSON.stringify(id));
    const newBook = new Book(id, name, author);
    if (localStorage.getItem('bookList').length !== 0) {
      allBooks = JSON.parse(localStorage.getItem('bookList'));
    } else {
      allBooks = [];
    }
    allBooks.unshift(newBook);
    localStorage.setItem('bookList', JSON.stringify(allBooks));
  }
}
}
