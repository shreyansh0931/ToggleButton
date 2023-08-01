import "./styles.css";
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

var toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("change", toggleMode);
