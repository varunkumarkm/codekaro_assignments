//====================JavaScript practice================================

// array and objects
// conditionals
// loops

// let items = ['milk', 'bread', 'butter'];
// console.log(items);
// items.push('apples');
// items.pop()
// items.pop()
// splice
// items.splice(0, 4, 'apple');
// console.log(items);


// console.log(typeof items)


// let user = {
//     name: 'yash',
//     age: 24,
//     email: 'yash@gmail.com',
//     hobbies: ['teaching', 'reading books', 'cooking']
// }
// user.name = 'yash goel'
// user.phone = '1234567890'
// delete user.age
// console.log(user)

// console.log(typeof user)


// let arr = ['yash', 'mayank', 'kunal']
//     arr['test'] = 'nayan';
// console.log(arr)

// array of objects
// let users = [
//     {name: 'yash', email: 'yash@gmail.com'},
//     {name: 'ashish', email: 'ashish@gmail.com'},
//     {name: 'himanshu', email: 'himanshu@gmail.com'},
//     {name: 'arpit', email: 'arpit@gmail.com'},
//     {name: 'kunal', email: 'kunal@gmail.com'},
//     {name: 'preetha', email: 'preetha@gmail.com'},
//     {name: 'kapil', email: 'suman@gmail.com'},
//     {name: 'varun', mail: 'suman@gmail.com'},
//     {name: 'neha', email: 'suman@gmail.com'},
//     {name: 'ramya', email: 'suman@gmail.com'},
//     {name: 'keerthi', email: 'suman@gmail.com'},

// ]
// let random = Math.floor(Math.random()*users.length)
// console.log(users[random].name)
// console.log()



// conditionals
// any value that is either true / false or it gets converted to true or false can be given inside if!
// let age = 4;
// let a = null;
// console.log(a)
// if(a){
//     console.log('You can vote');
// }
// else{
//     console.log('you can not vote');
// }

// truthy and falsy
// falsy => 0, -0, "", '', undefined, null, nan => false
// anything apart from falsy is treated as truthy values => true


// let n = 11;
// if(n % 2 == 0){
//     console.log('the number is even')
// }
// else{
//     console.log('the number is odd')
// }


// there is a swimming comp.
// 14-16 => junior level
// 17-24 => senior level
// after 24 years then he is not eligible to play
// if the user is less than 14 years than also he is not eligigle to play
// let age = 24;
// if(age >= 14 && age <=16){
//     console.log('you can play in junior level')
// }
// else if(age>=17 && age <=24){
//     console.log('you can play in senior level')
// }
// else{
//     console.log('you are not eligible to play')
// }

// let age = 4;
// ternary operator
// age >= 18 ? console.log('can vote') : console.log('can not vote!')


// let user = 'yash'
// let salary = '35000'

// if(user == 'yashi' || salary == 35000){
//     console.log('user found!!')
// }

// === (strictly equal to ) => compares the value and data types
// == (equal to ) => comapares the value
// if(salary === 35000){
//     console.log('true')
// }
// else{
//     console.log('false')
// }


//====================Functions and loops=================================

// functions
// arrow functions type of arrow functions
// loops


// function grinder(items){
//     console.log('grinding...', items)
//     // 10
// }
// let grindingItems = 'onion and garlic';
// grinder('tomatoes');
// grinder(grindingItems);
// grinder('coffee')



// function add(a, b){
//     console.log(a+b)
// }

// add(2,3)
// add(4,5)

// return


// function sqr(n){
//     let result  = n*n;
//     return result;
// }
// let result = sqr(2);
// console.log(sqr(3))




// function calculateSalary(name, salary){
//     let tds = salary * 0.1;
//     let inhand = salary - tds;
//     return inhand;
// }
// always use return at the end anything after end becomes unreachable

// let inhand = calculateSalary('yash', 54000);
// let inhand1 = calculateSalary('mayank', 40000);

// console.log(inhand1)


// es6 => arrow functions
// function functionName(){
//     // code
// }

// sum = () =>{
//     // code
// }

// arrow functions are widely accepted
// demo=()=>{
//     console.log('this is a dummy arrow function!')
//}
// demo()
// sigle parameter
// cube=n=>{console.log(n*n*n)}

// implicit returns in arrow functions
// cube=n=>n*n*n
// sum=(a,b)=>a+b


// block arrow function
// sum = (a,b)=>{
//     let result = a+b;
//     return result;
// }
// console.log(sum(4, 5))


// loops => for, foreach, dowhile, while, forin and forof

// for(let i = 1; i<=5; i++){
//     console.log(i)
// }

// let users = [
//     {name: 'yash', email: 'yash@gmail.com',age: 14},
//     {name: 'ashish', email: 'ashish@gmail.com',age: 16},
//     {name: 'himanshu', email: 'himanshu@gmail.com', age: 24},
//     {name: 'arpit', email: 'arpit@gmail.com',age: 2},
//     {name: 'kunal', email: 'kunal@gmail.com',age: 18},
//     {name: 'preetha', email: 'preetha@gmail.com',age: 19},
//     {name: 'kapil', email: 'kapil@gmail.com',age: 14},
//     {name: 'varun', mail: 'varun@gmail.com',age: 24},
//     {name: 'neha', email: 'neha@gmail.com',age: 80},
//     {name: 'ramya', email: 'ramya@gmail.com',age: 30},
//     {name: 'keerthi', email: 'keerthi@gmail.com',age: 28},

// ]

// for(let i=0; i<users.length; i++){
//     if(users[i].age >= 18){
//         console.log(users[i].name)
//     }
// }

// foreach loop 
// foreach only works with arrays

// let arr = [1,2,3,4,5,6,7,8,9];
// console.table(users)
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]*arr[i])
// }

// console.log('for each loop in action')

// arr.forEach(function (n){
//     console.log(n*n)
// })

// arr.forEach(n=>{
//     console.log(n*n)
// })

// users.forEach(user=> {
//     console.log(user.name)
// })

//====================Map and filter examples==============================

// let arr = [1,2,3,4,5,6,7,8,9]
// const users = [
//     {
//       firstName: "Aarav",
//       lastName: "Patel",    
//       email: "aarav.patel@example.com",
//       gender: "Male",
//       salary: 50000,
//       age: 28
//     },
//     {
//       firstName: "Neha",
//       lastName: "Sharma",
//       email: "neha.sharma@example.com",
//       gender: "Female",
//       salary: 55000,
//       age: 32
//     },
//     {
//       firstName: "Vikram",
//       lastName: "Singh",
//       email: "vikram.singh@example.com",
//       gender: "Male",
//       salary: 60000,
//       age: 35
//     },
//     {
//       firstName: "Priya",
//       lastName: "Gupta",
//       email: "priya.gupta@example.com",
//       gender: "Female",
//       salary: 48000,
//       age: 25
//     },
//     {
//       firstName: "Rahul",
//       lastName: "Sharma",
//       email: "rahul.sharma@example.com",
//       gender: "Male",
//       salary: 52000,
//       age: 30
//     },
//     {
//       firstName: "Ananya",
//       lastName: "Das",
//       email: "ananya.das@example.com",
//       gender: "Female",
//       salary: 51000,
//       age: 29
//     },
//     {
//       firstName: "Aditya",
//       lastName: "Mishra",
//       email: "aditya.mishra@example.com",
//       gender: "Male",
//       salary: 58000,
//       age: 33
//     },
//     {
//       firstName: "Shreya",
//       lastName: "Patel",
//       email: "shreya.patel@example.com",
//       gender: "Female",
//       salary: 49000,
//       age: 27
//     },
//     {
//       firstName: "Arjun",
//       lastName: "Kumar",
//       email: "arjun.kumar@example.com",
//       gender: "Male",
//       salary: 54000,
//       age: 31
//     },
//     {
//       firstName: "Isha",
//       lastName: "Singh",
//       email: "isha.singh@example.com",
//       gender: "Female",
//       salary: 57000,
//       age: 34
//     }
//   ];


// let sqrs = [];
// for(let i=0; i<arr.length; i++){
//     let sqr = arr[i] * arr[i]
//     sqrs.push(sqr)
// }
// console.log(sqrs)

// es6 => array mapping and filters
// array mapping is used to transform the array
// let results = arr.map(function (n){
//     return n*n
// })

// let results = arr.map(n=> n*n)
// console.log(users)
// let names = users.map(user=>user.firstName )
// let names = users.map(user=>user.firstName + " " + user.lastName)
// let nums = arr.filter(function (n){
//         return n>=5
// })

// let evens = arr.filter(n=>n%2==1)

// console.log(evens)



// let men = users.filter(user=>user.gender == 'Male');
// let menNames = men.map(user=>user.firstName);

// let men = users.filter(user=>user.gender == 'Male').map(user=> user.firstName)


// console.log(men)

// let females = users.filter(user=>user.gender == 'Female')
// .filter(user=>user.salary > 50000).map(user=>user.firstName)

// console.log(females)

// const movies = [
//     {
//       title: "The Dark Knight",
//       genre: "Action",
//       year: 2008,
//       imdbRating: 9.0,
//       actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
//     },
//     {
//       title: "Inception",
//       genre: "Thriller",
//       year: 2010,
//       imdbRating: 8.8,
//       actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
//     },
//     {
//       title: "Shawshank Redemption",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 9.3,
//       actors: ["Tim Robbins", "Morgan Freeman"]
//     },
//     {
//       title: "Pulp Fiction",
//       genre: "Crime",
//       year: 1994,
//       imdbRating: 8.9,
//       actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
//     },
//     {
//       title: "The Godfather",
//       genre: "Drama",
//       year: 1972,
//       imdbRating: 9.2,
//       actors: ["Marlon Brando", "Al Pacino"]
//     },
//     {
//       title: "The Matrix",
//       genre: "Action",
//       year: 1999,
//       imdbRating: 8.7,
//       actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
//     },
//     {
//       title: "Forrest Gump",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 8.8,
//       actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
//     },
//     {
//       title: "The Silence of the Lambs",
//       genre: "Thriller",
//       year: 1991,
//       imdbRating: 8.6,
//       actors: ["Jodie Foster", "Anthony Hopkins"]
//     },
//     {
//       title: "The Shawshank Redemption",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 9.3,
//       actors: ["Tim Robbins", "Morgan Freeman"]
//     },
//     {
//       title: "The Departed",
//       genre: "Crime",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
//     },
//     {
//       title: "The Prestige",
//       genre: "Mystery",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
//     },
//     {
//       title: "The Hangover",
//       genre: "Comedy",
//       year: 2009,
//       imdbRating: 7.7,
//       actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
//     },
//     {
//       title: "Die Hard",
//       genre: "Action",
//       year: 1988,
//       imdbRating: 8.2,
//       actors: ["Bruce Willis", "Alan Rickman"]
//     },
//     {
//       title: "Fight Club",
//       genre: "Drama",
//       year: 1999,
//       imdbRating: 8.8,
//       actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
//     },
//     {
//       title: "Gladiator",
//       genre: "Action",
//       year: 2000,
//       imdbRating: 8.5,
//       actors: ["Russell Crowe", "Joaquin Phoenix"]
//     },
//     {
//       title: "The Social Network",
//       genre: "Biography",
//       year: 2010,
//       imdbRating: 7.7,
//       actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
//     },
//     {
//       title: "The Shining",
//       genre: "Horror",
//       year: 1980,
//       imdbRating: 8.4,
//       actors: ["Jack Nicholson", "Shelley Duvall"]
//     },
//     {
//       title: "The Departed",
//       genre: "Crime",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
//     },
//     {
//       title: "The Revenant",
//       genre: "Adventure",
//       year: 2015,
//       imdbRating: 8.0,
//       actors: ["Leonardo DiCaprio", "Tom Hardy"]
//     },
//     {
//       title: "The Usual Suspects",
//       genre: "Crime",
//       year: 1995,
//       imdbRating: 8.5,
//       actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
//     },
//     {
//       title: "Interstellar",
//       genre: "Sci-Fi",
//       year: 2014,
//       imdbRating: 8.6,
//       actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
//     }
//   ];

//   console.log(movies);

// let movieDetails = movies.map(movie => ({
//     title: movie.title,
//     imdbRating: movie.imdbRating,
//     year: movie.year
// }));

// console.log(movieDetails);

// let thrillMovies = movies.filter(movie => 
//   movie.genre === 'Thriller' && 
//   movie.year > 2000
// )

// console.log(thrillMovies);

// let dramaMovies = movies.filter(movie => 
//   movie.genre === 'Drama' &&
//   movie.imdbRating > 8.5
// )

// console.log(dramaMovies);

// let actionMovies = movies.filter(movie => 
//   movie.genre === 'Crime' &&
//   movie.actors.includes('Leonardo DiCaprio')
// )

// console.log(actionMovies);


// //Chain operations

// let drama = movies
//   .filter(movie => movie.genre === 'Mystery')
//   .filter(movie => movie.actors.includes('Christian Bale'))

// console.log(drama)

// let dramaMovie = movies
//   .filter(movie => movie.genre === 'Drama')
//   .filter(movie => movie.actors.includes('Tim Robbins'));

//   console.log(dramaMovie);



//=====================Documnet Object Model (DOM)=========================


// function unlocked() {
//   let title = document.getElementById('heading');
//   let button = document.getElementById('btn');
//   title.innerText = 'Congragulations! Now you can start with DOM manupulation.';
//   button.style.display = 'none';
//   console.log(typeof button);
// }


// function welcome(){
//   let studentName = document.getElementById('inputData');
//   let displayName = document.getElementById('displayName');
//   displayName.innerText = studentName.value;
//   studentName.value = ''
//   console.log(studentName.value);
// }

// function split (){
//   let amount = document.getElementById('amount');
//   let persons = document.getElementById('persons');

//   let result = (amount.value / persons.value).toFixed(2);
//   let resultDiv = document.getElementById('result');
//   resultDiv.innerText = result;

//   amount.value = ''
//   persons.value = ''

// }

// let counter = 0;
// let counterResult = document.getElementById('counterResult')
// function increment() {

//   counter++;
//   counterResult.innerText = counter;
// }

// function decrement() {

//   if (counter > 0) {
//     counter--;
//     counterResult.innerText = counter;
//   }
// }


// let demo = document.getElementById('demo');
// demo.innerHTML = '<h1 class="text-2xl font-bold">Welcome to JavaScript</h1>';

// function changeText() {
//   let heading = document.getElementById('title');
//   heading.innerText = "Welcome to the JavaScript";
// }


// let message = document.getElementById('message');

// let result = document.getElementById('result');

// function countCharacters() {

//   console.log("JS Loaded");

//   let text = message.value;

//   let totalCharacters = text.length;

//   let remaining = 100 - totalCharacters;

//   result.innerText =
//     "Remaining Characters: " + remaining;

//   if (remaining < 0) {

//     result.style.color = "red";

//   } else {

//     result.style.color = "black";

//   }
// }


// let heightInput = document.getElementById('height');

// let weightInput = document.getElementById('weight');

// let bmiResult = document.getElementById('bmiResult');

// let statusText = document.getElementById('status');

// function calculateBMI() {

//   let height = heightInput.value;

//   let weight = weightInput.value;

//   // Convert cm to meter

//   let heightInMeter = height / 100;

//   // BMI Formula

//   let bmi = weight / (heightInMeter * heightInMeter);

//   // Round value

//   bmi = bmi.toFixed(1);

//   // Update Result

//   bmiResult.innerText = "BMI: " + bmi;

//   // Conditions

//   if (bmi < 18.5) {

//     statusText.innerText = "Underweight ⚠️";
//     statusText.style.color = "yellow";

//   }

//   else if (bmi >= 18.5 && bmi <= 24.9) {

//     statusText.innerText = "Normal ✅";
//     statusText.style.color = "lightgreen";

//   }

//   else if (bmi >= 25 && bmi <= 29.9) {

//     statusText.innerText = "Overweight ⚠️";
//     statusText.style.color = "orange";

//   }

//   else {

//     statusText.innerText = "Obese ❌";
//     statusText.style.color = "red";

//   }
// }

// function clickHere(){
//   let clickMe = document.getElementById('handleIt');
//   let checkUpdate = document.getElementById('paragraph')
//   let addWords = document.getElementById('addSentence')

//   addWords.innerText = addWords.value;

//   addWords.innerText = "Malora Groups";

// }


