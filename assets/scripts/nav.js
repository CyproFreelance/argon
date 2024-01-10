const navbar = document.getElementById("navbar");
const hero = document.querySelector(".hero");

function handleScroll() {
    const scrollPosition = window.scrollY;
    const heroTop = hero.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition >= heroTop) {
        navbar.classList.add('fixed-navbar');
        navbar.classList.add('fake-slide-down');
    } else {
        navbar.classList.remove('fixed-navbar');
        navbar.classList.remove('fake-slide-down');
    }
}

window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function () {
    // Show loading animation when the page starts loading
    document.getElementById("loading-container").style.visibility = "visible";
    document.getElementById("loading-container").style.opacity = 1;
  
    // Hide loading animation when the page has finished loading
    window.addEventListener("load", function () {
      document.getElementById("loading-container").style.opacity = 0;
      setTimeout(function () {
        document.getElementById("loading-container").style.visibility = "hidden";
      }, 500); // Adjust the duration based on your transition duration
    });
  });