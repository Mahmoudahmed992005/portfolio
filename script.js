const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
navToggle.addEventListener("click", () => navList.classList.toggle("open"));
navList
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navList.classList.remove("open")),
  );

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});
