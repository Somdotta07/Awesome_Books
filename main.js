/* eslint-disable linebreak-style */
import Remove from './modules/remove.js';
import Add from './modules/add.js';

const add = new Add();
const remove = new Remove();
const { DateTime } = luxon;
const now = DateTime.now();
const bookContainer = document.createElement('ul');
bookContainer.classList += 'book-list';
const heading = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const time = document.querySelector('#current-time');
const createNew = document.getElementById('btn');
// const bookContainer = document.getElementById('book-list');
let allBooks = [];
if (localStorage.getItem('bookList') === null) {
  localStorage.setItem('bookList', []);
}
if (localStorage.getItem('id') === null) {
  localStorage.setItem('id', JSON.stringify(0));
}
const refreshDOM = () => {
  heading.innerText = 'All Awesome Books';
  bookContainer.innerHTML = '';
  mainContainer.innerHTML = '';
  allBooks = JSON.parse(localStorage.getItem('bookList'));
  allBooks.forEach((book) => {
    const bookTitle = book.name;
    const bookAuthor = book.author;
    const bookId = book.id;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', (e) => {
      const { id } = e.target.parentNode;
      remove.remove(id);
    });
    const newBook = document.createElement('li');
    const newTitle = document.createElement('p');
    const newAuthor = document.createElement('p');
    newTitle.innerText = `"${bookTitle}" \u00A0 `;
    newAuthor.innerText = ` by ${bookAuthor}`;
    newBook.id = bookId;
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(removeBtn);
    bookContainer.appendChild(newBook);
  });
};
// For current time
window.onload = () => {
  refreshDOM();
  time.innerHTML = `${now.c.month} ${now.c.day} ${now.c.year}, ${now.c.hour}:${now.c.minute}:${now.c.second}`;
};

window.onload = refreshDOM;
createNew.addEventListener('click', (e) => {
  e.preventDefault();
  add.add();
  bookContainer.innerHTML = '';
  refreshDOM();
});
