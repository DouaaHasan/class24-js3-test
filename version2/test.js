// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:

// - Takes as an argument the following array of objects:
const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL:
      'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
];

function creatAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function iterateThroughBooks(arr) {
  // - Iterates over the array and outputs the details of each item nto the DOM.
  arr.forEach(book => {
    // - Displays the items inside an unordered list (created programmatically using JavaScript)
    const myUl1 = creatAndAppend('ul', document.body);
    creatAndAppend('li', myUl1, { text: `${book.bookName} by ${book.author}` });
    creatAndAppend('img', myUl1, { src: `${book.coverURL}` });
  });
}
iterateThroughBooks(books);

// 2.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users/1
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)

function fetchJson(url) {
  return fetch(url).then(res => res.json());
}

fetchJson('https://jsonplaceholder.typicode.com/users/1').then(obj => {
  const myUl = creatAndAppend('ul', document.body);
  creatAndAppend('li', myUl, { text: obj.name });
  creatAndAppend('li', myUl, { text: obj.email });
  creatAndAppend('li', myUl, { text: obj.address.city });
});

// 3.
// Write a function that:
// - Takes in an array of country names
// - Returns the country with the longest name.
// - Uses the following array as an argument:
const countries = ['The Netherlands', 'Syria', 'Turkey', 'Mexico', 'United States'];
function findLongestString(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(findLongestString(countries));
