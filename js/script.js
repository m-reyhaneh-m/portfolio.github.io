// Mobile menu
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// show grid an list
const grid = document.getElementById("works-grid");
const viewBtn = document.querySelectorAll(".view-toggle[data-view]");
viewBtn.forEach((b) => {
  b.addEventListener("click", () => {
    viewBtn.forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const v = b.getAttribute("data-view");
    if (v === "list") {
      grid.className = "grid md:grid-cols-1 gap-6";
    } else {
      grid.className = "grid md:grid-cols-3 gap-6";
    }
  });
});
