// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover
document.getElementById("hoverBtn").addEventListener("mouseover", () => {
  alert("You hovered!");
});

// Keypress
document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`You typed: ${e.key}`);
});

// Secret double-click
document.getElementById("secretBox").addEventListener("dblclick", () => {
  alert("Secret unlocked! 🎉");
});

// Image gallery
let images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000"
];
let index = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  index = (index + 1) % images.length;
  document.getElementById("galleryImage").src = images[index];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.add("hidden"));
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

// Form validation
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("feedback");
  feedback.textContent = e.target.value.length < 8
    ? "Password too short"
    : "Password looks good";
});
