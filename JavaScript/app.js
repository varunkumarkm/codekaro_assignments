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


  