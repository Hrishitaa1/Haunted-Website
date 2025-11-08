// Registration validation and saving
function registerUser() {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("☠️ Passwords do not match! Even ghosts get it right...");
    return false;
  }

  if (username.length < 4 || password.length < 4) {
    alert("👀 Username and password must be at least 4 characters long.");
    return false;
  }

  // Save to localStorage
  const userData = { name, email, username, password };
  localStorage.setItem("horrorUser", JSON.stringify(userData));

  alert("🩸 Registration successful! Dare to enter the darkness...");
  window.location.href = "index.html"; // Redirect to login
  return false;
}

// Horror sound control
const audio = document.getElementById("horrorAudio");
audio.volume = 0.2;
setTimeout(() => {
  audio.play();
}, 1000);
