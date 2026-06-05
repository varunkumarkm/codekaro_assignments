// Local storage
// We can use it even if the page is refreshed or the browser is closed

// If we want to clear all the values from the localstorage
// localStorage.clear();

// Storing to the local storage
// localStorage.setItem('name', 'Varunkumar')

// If we want to update this value
// localStorage.setItem('name', 'Kirankumar')

//If we want to remove specific key value
// localStorage.removeItem('name')

// localStorage.clear();

// let nameInput = document.querySelector("input");
// let btn = document.querySelector("button");
// let form = document.querySelector("#welcome-form");
// let nameSpan = document.querySelector("#name");

// btn.addEventListener("click", () => {
//   let name = nameInput.value;
//   localStorage.setItem("name", name);
//   checkFunction();
// });

// function checkFunction() {
//   let userExists = "name" in localStorage;

//   if (userExists) {
//     form.classList.add("hidden");
//     nameSpan.innerText = localStorage.getItem("name");
//   }
// }

// Important question, Local storage object example => How can we store object in the internal memory

// let user = {name: 'varun', email: 'varun@gmail.com'}
// localStorage.setItem('user', JSON.stringify(user))

// // localStorage.setItem('user', user)
// console.log(localStorage.getItem('user'))

// // This parse is remove the keys from strings and get the value.
// let userFromStorage = JSON.parse(localStorage.getItem('user'))
// console.log(userFromStorage.name);

// ======================Session Storage========================================================

// Store to the session storage
// sessionStorage.setItem('name', 'Ramesh kumar')

// If we want to update
// sessionStorage.setItem('name', 'Suresh kumar')

//  If we want to get the value
// let getValue = sessionStorage.getItem('name')
// console.log(getValue);

// let incrementBtn = document.querySelector("#increment");
// let decrementBtn = document.querySelector("#decrement");
// let counterDiv = document.querySelector("#counter");

// incrementBtn.addEventListener("click", () => {
//   let counter = parseInt(localStorage.getItem("counter")) || 0;
//   counter = counter + 1;
//   localStorage.setItem("counter", counter);
//   updateCounter();
// });

// decrementBtn.addEventListener("click", () => {
//   let counter = parseInt(localStorage.getItem("counter")) || 0;
//   counter = counter - 1;
//   localStorage.setItem("counter", counter);
//   updateCounter();
// });

// function updateCounter() {
//   let counter = parseInt(localStorage.getItem("counter")) || 0;
//   counterDiv.innerText = counter;
// }

// updateCounter();

// ================What is the differance of local and session storage============================

// let incrementBtn = document.querySelector("#increment");
// let decrementBtn = document.querySelector("#decrement");
// let counterDiv = document.querySelector("#counter");

// incrementBtn.addEventListener("click", () => {
//   let counter = parseInt(sessionStorage.getItem("counter")) || 0;
//   counter = counter + 1;
//   sessionStorage.setItem("counter", counter);
//   updateCounter();
// });

// decrementBtn.addEventListener("click", () => {
//   let counter = parseInt(sessionStorage.getItem("counter")) || 0;
//   counter = counter - 1;
//   sessionStorage.setItem("counter", counter);
//   updateCounter();
// });

// function updateCounter() {
//   let counter = parseInt(sessionStorage.getItem("counter")) || 0;
//   counterDiv.innerText = counter;
// }
//   updateCounter();

// ==============How to retrive all the local storage / session storage keys and their values=============

// console.log(localStorage)

// for(let i=0; i<localStorage.length; i++) {
//     const key = localStorage.key(i)
//     const value = localStorage.getItem(key)

//     console.log(key, value)
// }

// Template literals

// let name = 'varun';
// let email = 'varun@gmail.com';

// let message = "My name is " + name + " and my email is " + email;

// console.log(message);

let name = 'varun';
let email = 'varun@gmail.com';

let message = `My name is ${name} and my email is ${email}`;

console.log(message);

