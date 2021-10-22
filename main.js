import Remove from './modules/remove.js';
import Add from './modules/add.js';

const add = new Add();
const remove = new Remove();
// eslint-disable-next-line no-undef
const { DateTime } = luxon;
const now = DateTime.now();
const mainPage = document.getElementById('main-page');
const createBook = document.getElementById('add-book');
const contactPage = document.getElementById('contact-page');
const bookContainer = document.createElement('ul');
bookContainer.classList += 'book-list';
const heading = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const time = document.querySelector('#current-time');

let allBooks = [];
if (localStorage.getItem('bookList') === null) {
  localStorage.setItem('bookList', []);
}
if (localStorage.getItem('id') === null) {
  localStorage.setItem('id', JSON.stringify(0));
}
// book list
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
    newTitle.innerHTML = `"${(bookTitle)}" by ${(bookAuthor)}`;
    newBook.id = bookId;
    newBook.appendChild(newTitle);
    newBook.appendChild(removeBtn);
    bookContainer.appendChild(newBook);
    bookContainer.id = 'book-container';
    mainContainer.appendChild(bookContainer);
  });
};
// For current time
window.onload = () => {
  refreshDOM();
  time.innerHTML = `${now.c.month} ${now.c.day} ${now.c.year}, ${now.c.hour}:${now.c.minute}:${now.c.second}`;
};

mainPage.addEventListener('click', () => {
  refreshDOM();
});
// Add form
createBook.addEventListener('click', (e) => {
  e.preventDefault();
  heading.innerHTML = 'Add a New Book';
  mainContainer.innerHTML = '';
  const form = document.createElement('form');
  form.classList += 'book-form';

  const titleInput = document.createElement('input');
  titleInput.classList += 'form-control';
  titleInput.type = 'text';
  titleInput.name = 'bookname';
  titleInput.id = 'title';
  titleInput.placeholder = 'Title';
  form.appendChild(titleInput);

  const authorInput = document.createElement('input');
  authorInput.classList += 'form-control';
  authorInput.type = 'text';
  authorInput.name = 'authorname';
  authorInput.id = 'author';
  authorInput.placeholder = 'Author';
  form.appendChild(authorInput);

  const addBTN = document.createElement('button');
  addBTN.id = 'btn';
  addBTN.type = 'button';
  addBTN.innerText = 'Add';
  addBTN.classList += 'btn';
  form.appendChild(addBTN);

  mainContainer.appendChild(form);

  addBTN.addEventListener('click', () => {
    add.add(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });
});

// Create Contact page
contactPage.addEventListener('click', (e) => {
  e.preventDefault();
  heading.innerHTML = 'Contact Information';
  mainContainer.innerHTML = '';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'For more information please contact us on: ';
  const list = document.createElement('li');
  list.innerHTML = 'munsamibenge65@gmail.com';
  const list2 = document.createElement('li');
  list2.innerHTML = '+2609657676761';
  const list3 = document.createElement('li');
  const ull = document.createElement('ul');
  ull.classList += 'info text-left';
  list3.innerHTML = 'Welcome to our address';
  list.classList += 'myList';
  list2.classList += 'myList';
  list3.classList += 'myList';
  mainContainer.appendChild(paragraph);
  ull.appendChild(list);
  ull.appendChild(list2);
  ull.appendChild(list3);
  mainContainer.appendChild(ull);
});