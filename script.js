// Horror background sound setup
const audio = document.getElementById("horrorAudio");
audio.volume = 0.2;
setTimeout(() => {
  audio.play();
}, 1000);

// Login validation from localStorage
function validateLogin() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // Retrieve saved user data
  const savedUser = JSON.parse(localStorage.getItem("horrorUser"));

  if (!savedUser) {
    alert("☠️ No user found! The spirits demand registration first...");
    return false;
  }

  if (enteredUsername === savedUser.username && enteredPassword === savedUser.password) {
    alert("🩸 Welcome back to the horror world, " + savedUser.name + "!");
    window.location.href = "categories.html"; // Redirect after login
    return false;
  } else {
    alert("👻 Invalid credentials! The ghosts are watching you...");
    return false;
  }
}
