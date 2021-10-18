/* eslint-disable linebreak-style */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');
const button = document.getElementById('btn');
let allBooks = [];
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

// Update DOM
const refreshDOM = () => {
  allBooks = JSON.parse(localStorage.getItem('bookList'));
  allBooks.forEach((book) => {
    const bookTitle = book.name;
    const bookAuthor = book.author;
    const bookId = book.id;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', (e) => {
      const { id } = e.target.parentNode;
      allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
      localStorage.setItem('bookList', JSON.stringify(allBooks));
      // eslint-disable-next-line
      location.reload();
    });
    const newBook = document.createElement('li');
    const newTitle = document.createElement('p');
    const newAuthor = document.createElement('p');
    newTitle.innerText = bookTitle;
    newAuthor.innerText = bookAuthor;
    newBook.id = bookId;
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(removeBtn);
    bookList.appendChild(newBook);
  });
};

window.onload = refreshDOM;