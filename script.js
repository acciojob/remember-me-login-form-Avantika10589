
// script.js

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
window.onload = () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");
  if (savedUser && savedPass) {
    existingBtn.style.display = "inline-block";
  }
};

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Toggle existing user button
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle existing user login
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});

