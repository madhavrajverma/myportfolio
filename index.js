
const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50,45];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

var mobileNav = document.querySelector('.mobile-nav')

function myFunction() {
  mobileNav.style.display = "block"
}

document.querySelector('.back-btn').addEventListener('click', () => {
    mobileNav.style.display = "none"
})