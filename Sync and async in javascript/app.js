// console.log("task 1");
// console.log("task 2");
// setTimeout(() => {
//   console.log("task 3");
// }, 5000);
// console.log("task 4");

// promisis and sync

// const demoPromisis = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(console.log("task is not completed"));
//   }, 5000);
// });

// demoPromisis
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

//   fetch -> It is used to fetch the data from the API, It is an async code.
// This is the prmisis way of getting the data.

// fetch('https://dummyjson.com/todos').then((data) => {
//     return data.json();
// }).then((data) => {
//     console.log(data)
// })

// async function fecthTodos() {
//     let data = await fetch('https://dummyjson.com/todos')
//     let result = await data.json();
//     let todos = result.todos;

//     let random = Math.floor(Math.random()*todos.length);

//     let todo = todos[random];
//     document.getElementById('id').innerText = todo.id
//     document.getElementById('todo').innerText = todo.todo
//     document.getElementById('userId').innerText = todo.userId
// }
//  fecthTodos()

// async function getUser() {
//   let response = await fetch("https://randomuser.me/api/");

//   let data = await response.json();

//   let user = data.results[0];

//   document.getElementById("userImage").src = user.picture.large;

//   document.getElementById("userName").innerText =
//     `${user.name.first} ${user.name.last}`;

//   document.getElementById("userEmail").innerText = user.email;

//   document.getElementById("userCountry").innerText = user.location.country;
// }

// ========================Fetch the movie=========================================

// async function getMovie() {

//     let response = await fetch(
//         'https://www.omdbapi.com/?apikey=9e02f15&t=rrr'
//     );

//     let data = await response.json();

//     console.log(data);
// }
// getMovie();

// ==========================Another way=========================================

let movieApi = "https://www.omdbapi.com/?apikey=9e02f15&t=";

// fetch(movieApi)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch(movieApi)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//   });

let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let genre = document.querySelector("#genre");
let actors = document.querySelector("#actors");
let directors = document.querySelector("#directors");
let awards = document.querySelector("#awards");
let collection = document.querySelector("#collection");
let ln = document.querySelector("#ln");
let ratings = document.querySelector("#ratings");
let poster = document.querySelector("#poster");
let container = document.querySelector("#container");
let verdict = document.querySelector("#verdict");
container.classList.add("hidden");

// ----- new: rating -> verdict tag -----
function setVerdict(imdbRating) {
  let score = parseFloat(imdbRating);

  verdict.classList.remove("tier-good", "tier-mid", "tier-low");

  if (isNaN(score)) {
    verdict.innerText = "Rating unavailable";
    verdict.classList.add("tier-mid");
    return;
  }

  if (score > 7) {
    verdict.innerText = "Worth watching";
    verdict.classList.add("tier-good");
  } else if (score >= 6) {
    verdict.innerText = "Can watch";
    verdict.classList.add("tier-mid");
  } else {
    verdict.innerText = "A little boring";
    verdict.classList.add("tier-low");
  }
}

// ----- new: UI helpers (loading / error / fallback poster) -----
let searchBtn = document.querySelector("#searchBtn");
let statusMsg = document.querySelector("#statusMsg");
let FALLBACK_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='320'><rect width='100%' height='100%' fill='%231b2740'/><text x='50%' y='50%' fill='%23c9a227' font-family='sans-serif' font-size='16' text-anchor='middle'>No Poster</text></svg>`,
  );

function setLoading(isLoading) {
  if (isLoading) {
    searchBtn.classList.add("is-loading");
    searchBtn.querySelector(".btn-label").innerText = "Searching…";
    searchBtn.disabled = true;
  } else {
    searchBtn.classList.remove("is-loading");
    searchBtn.querySelector(".btn-label").innerText = "Search movie";
    searchBtn.disabled = false;
  }
}

function showStatus(message, type) {
  statusMsg.innerText = message;
  statusMsg.classList.remove("hidden");
  statusMsg.classList.toggle("is-loading", type === "loading");
}

function clearStatus() {
  statusMsg.innerText = "";
  statusMsg.classList.add("hidden");
  statusMsg.classList.remove("is-loading");
}

async function search() {
  let movieInput = document.querySelector("#movieName");
  let query = movieApi + movieInput.value;

  if (!movieInput.value.trim()) {
    showStatus("Type a movie name to search.", "error");
    return;
  }

  setLoading(true);
  showStatus("Searching the archive…", "loading");
  container.classList.add("hidden");

  fetch(query)
    .then((data) => data.json())
    .then((data) => {
      setLoading(false);

      if (data.Response === "False") {
        showStatus(data.Error || "No match found for that title.", "error");
        return;
      }

      clearStatus();
      container.classList.remove("hidden");

      title.innerText = data.Title;
      desc.innerText = data.Plot;
      actors.innerText = data.Actors;
      directors.innerText = data.Director;
      awards.innerText = data.Awards;
      collection.innerText = data.BoxOffice;
      ln.innerText = data.Language;
      ratings.innerText = data.imdbRating;
      poster.src =
        data.Poster && data.Poster !== "N/A" ? data.Poster : FALLBACK_POSTER;
      setVerdict(data.imdbRating);
    })
    .catch(() => {
      setLoading(false);
      showStatus("Something went wrong reaching the movie database.", "error");
    });
}

// allow pressing Enter in the search box to trigger a search
document.querySelector("#movieName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
