// let testing = document.getElementById("btn");

// test = (e) => {
//      console.log('test function is called')
//      console.log(e.target.innerText + ' was clicked')
// }

//Another way we can write this code in a more organized way

// testing.addEventListener("click", (e) => {
//   console.log(e.target.innerText + ' was clicked');
// });

// let btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let btn = e.target;
//     console.log(e.target.innerText + " was clicked");
//     btn.innerText = "Cicked";

//     btn.setAttribute("disabled", true);
//   });
// });

// btn.addEventListener('click', ()=> {
//     console.log('button clicked')
// })

// on mouse in
// on mouse out
// onchange
// onkeyup
// onkeydown
// scroll
// load

// on mouse in
// on mouse out
// let alert = document.querySelector('.alert')
// let demo = document.querySelector('.demo')
// demo.addEventListener('mouseover', () => {
//     alert.innerText = 'Cursor is inside the demo box';
// })

// =====================================================

// demo.addEventListener('mouseout', () => {
//     alert.innerText ='Cursor is outside the demo box'
// })

// onchange
// let inputs = document.querySelectorAll('input')
// inputs.forEach((input) => {
//     input.addEventListener('change', () => {
//     console.log(input.value)
//     })
// })

// =====================================================

// onkeyup and onkeydown

// let input = document.querySelector('input')
// input.addEventListener('keyup', () => {
//     console.log(input.value);
// })

//===================load events=====================

// let loader = document.querySelector('#loader');
// loader.classList.remove('hidden');
// loader.classList.add('page-loader');

// // Add an event listener for the window load event
// window.addEventListener("load", function () {
//   // Keep spinner visible for 3 seconds
//   setTimeout(function () {
//     loader.classList.remove('page-loader');
//     loader.classList.add('hidden');

//     // Show message
//     document.getElementById("message").style.display = "block";
//   }, 3000); // 3 seconds
// });

// ================scroll events====================

// let btn = document.querySelector('.help');

// window.addEventListener('scroll', () => {
//     // Show button after scrolling 500px
//     if (window.scrollY > 500) {
//         btn.classList.add('show');
//         document.title = "Scrolled past 500px!";
//     } else {
//         btn.classList.remove('show');
//         document.title = "Welcome to My Page";
//     }

//     // Example: change title based on ranges
//     if (window.scrollY > 1000 && window.scrollY <= 1500) {
//         document.title = "Middle of the page";
//     } else if (window.scrollY > 1500) {
//         document.title = "Deep down the page!";
//     }
// });

