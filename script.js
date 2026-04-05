const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

function showThanks() {
  const thanks = document.getElementById("thanks");
  if (thanks) {
    thanks.textContent = "Thank you! Our team will contact you shortly.";
  }
}
