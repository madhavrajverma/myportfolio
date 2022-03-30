
var mobileNav = document.querySelector('.mobile-nav')

function myFunction() {
  mobileNav.style.display = "block"
}

document.querySelector('.back-btn').addEventListener('click', () => {
    mobileNav.style.display = "none"
})

console.log("JS FIle")