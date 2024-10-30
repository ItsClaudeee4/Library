/*inputs */
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("form");

/*booksSection*/
const booksSection = document.getElementById("booksSection");

/*buttons*/
const newBookBtn = document.getElementById("NewBtn");
const addBookBtn = document.getElementById("addBookBtn");

/*new book*/
newBookBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

const myLibrary = [];

function Book(title, author, pages, checked) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.checked = checked;
}
Book.prototype.toggleRead = function () {
  this.checked = !this.checked;
};
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  booksSection.innerHTML = "";
  myLibrary.forEach((library, i) => {
    let book = document.createElement("div");
    booksSection.appendChild(book);
    book.innerHTML = `<h3 id="title">${library.title}</h3>
        <h4 id="author">By ${library.author}</h4>
        <h5 id="pages">${library.pages}</h5>
        ${
          library.checked
            ? '  <p id="isRead" style="background-color: blue;">Readed</p>'
            : '  <p id="isRead" style="background-color: red;">Not readed</p>'
        }
         <button id="removeBook" onclick="removeBook(${i})">Remove book</button>
        <button id="toggleRead"  onclick="toggleRead(${i})">Readed</button>`;
  });
}

function addBookToLibrary() {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let checked = checkbox.checked;

  let newBook = new Book(title, author, pages, checked);
  myLibrary.push(newBook);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
});
