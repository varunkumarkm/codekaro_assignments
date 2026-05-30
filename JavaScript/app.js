let users = [];
let usersContainer = document.getElementById("usersContainer");
let alertMessage = document.getElementById("alertMessage");

function renderUsers() {

  usersContainer.innerHTML = "";

  users.forEach((user) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");
    let deleteBtn = document.createElement("div");

    div.classList.add("user");
    deleteBtn.classList.add("deleteButton");

    name.innerText = user.name;
    email.innerText = user.email;

    deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    `;

    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });

    name.name = "";
    email.email = "";

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(deleteBtn);

    usersContainer.appendChild(div);
  });
}

function addUser() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value === "" || email.value === "") {
    showMessage("Please fill all fields", "danger");
    return;
  }

  let user = {
    id: Date.now(),
    name: name.value,
    email: email.value,
  };

  let existingUser = users.find((user) => user.email === email.value);

  if (existingUser) {
    showMessage("Email already exists!", "danger");
    return;
  }

  users.push(user);
  showMessage("User added successfully!", "success");

  renderUsers();

  name.value = "";
  email.value = "";
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);

  renderUsers();

  showMessage("User deleted successfully!", "success");
}

function showMessage(message, type) {
  alertMessage.innerText = message;

  alertMessage.classList.remove("success", "danger");

  if (type === "success") {
    alertMessage.classList.add("success");
  } else {
    alertMessage.classList.add("danger");
  }

  setTimeout(() => {
    alertMessage.classList.remove("success", "danger");
    alertMessage.innerText = "";
  }, 3000);
}

// ==========================================================================

// const users = [];

// const responseContainer = document.getElementById('responseContainer');
// const submitBtn = document.getElementById('submitBtn');

// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const mobileInput = document.getElementById('mobile');
// const addressInput = document.getElementById('address');

// submitBtn.addEventListener('click', addUserDetails);

// function createUserCard(user) {
//     const card = document.createElement('div');
//     card.classList.add('userDetails');

//     card.innerHTML = `
//         <p><strong>Name:</strong> ${user.name}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>Mobile:</strong> ${user.mobile}</p>
//         <p><strong>Address:</strong> ${user.address}</p>
//     `;

//     return card;
// }

// function renderUsers() {
//     responseContainer.innerHTML = '';

//     users.forEach(user => {
//         const userCard = createUserCard(user);
//         responseContainer.appendChild(userCard);
//     });
// }

// function addUserDetails() {

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const mobile = mobileInput.value.trim();
//     const address = addressInput.value.trim();

//     if (!name || !email || !mobile || !address) {
//         alert('Please fill all fields');
//         return;
//     }

//     const isExistingUser = users.some(user =>
//         user.email === email || user.mobile === mobile
//     );

//     if (isExistingUser) {
//         alert('Email or Mobile already exists');
//         return;
//     }

//     const newUser = {
//         name,
//         email,
//         mobile,
//         address
//     };

//     users.push(newUser);

//     renderUsers();

//     clearForm();
// }

// function clearForm() {
//     nameInput.value = '';
//     emailInput.value = '';
//     mobileInput.value = '';
//     addressInput.value = '';
// }
