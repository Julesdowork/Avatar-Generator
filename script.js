const usernameInput = document.querySelector("#username");
const avatar = document.querySelector("#avatar");
const styleButtons = document.querySelectorAll(".style-btn");

let currentStyle = "lorelei";

styleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // reset
    styleButtons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    currentStyle = btn.dataset.style;

    generateAvatar();
  });
});

function generateAvatar() {
  const seed =
    usernameInput.value.trim() || Math.random().toString(36).slice(2);
  avatar.src = `https://api.dicebear.com/10.x/${currentStyle}/svg?seed=${seed}`;
}

generateAvatar();
