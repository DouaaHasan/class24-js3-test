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
// - Iterates over the array and outputs the details of each item nto the DOM.
// - Displays the items inside an unordered list (created programmatically using JavaScript)
// function creatAndAppend(name, parent, options = {}) {
//   const elem = document.createElement(name);
//   parent.appendChild(elem);
//   Object.entries(options).forEach(([key, value]) => {
//     if (key === 'text') {
//       elem.textContent = value;
//     } else {
//       elem.setAttribute(key, value);
//     }
//   });
//   return elem;
// }

function IterateThroughBooks(arr) {
  arr.forEach(book => {
    const myUl1 = document.createElement('ul');
    document.body.appendChild(myUl1);
    const myLi1 = document.createElement('li');
    const myImg = document.createElement('img');
    myLi1.textContent = `${book.bookName} by ${book.author}`;
    myImg.src = `${book.coverURL}`;

    myUl1.appendChild(myLi1);
    myUl1.appendChild(myImg);
  });
}
IterateThroughBooks(books);
// 2.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users/1
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)

function fetchJson(url) {
  return fetch(url).then(res => res.json());
  // .then(data => console.log(data));
}
fetchJson('https://jsonplaceholder.typicode.com/users/1').then(obj => {
  for (const property in obj) {
    const myUl = document.createElement('ul');
    document.body.appendChild(myUl);
    const myLi = document.createElement('li');
    myLi.textContent = `${property}: ${obj[property]}`;
    myUl.appendChild(myLi);
  }
});

// 3.
// Write a function that:
// - Takes in an array of country names
// - Returns the country with the longest name.
// - Uses the following array as an argument:
const countries = ['The Netherlands', 'Syria', 'Turkey', 'Mexico', 'United States'];
function compareArray(arr) {
  // I couldn't figure out the logic
  return arr[0];
}
compareArray(countries);
